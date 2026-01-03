import Image from "@tiptap/extension-image";

export const ImageResize = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: (element) => element.getAttribute("width"),
        renderHTML: (attributes) => {
          if (!attributes.width) {
            return {};
          }
          return {
            width: attributes.width,
          };
        },
      },
      height: {
        default: null,
        parseHTML: (element) => element.getAttribute("height"),
        renderHTML: (attributes) => {
          if (!attributes.height) {
            return {};
          }
          return {
            height: attributes.height,
          };
        },
      },
    };
  },
  addNodeView() {
    return ({ node, HTMLAttributes, getPos, editor }) => {
      const container = document.createElement("div");
      container.className = "image-resize-container relative inline-block group my-4";
      container.style.display = "inline-block";
      
      const img = document.createElement("img");
      Object.entries(HTMLAttributes).forEach(([key, value]) => {
        if (key !== "class") {
          img.setAttribute(key, value);
        }
      });
      
      img.className = "max-w-full h-auto rounded-lg cursor-pointer";
      img.style.display = "block";
      
      if (node.attrs.width) {
        img.style.width = `${node.attrs.width}px`;
        img.style.maxWidth = `${node.attrs.width}px`;
      }
      if (node.attrs.height) {
        img.style.height = `${node.attrs.height}px`;
      }
      
      // Resize handle
      const handle = document.createElement("div");
      handle.className = "absolute bottom-0 right-0 w-4 h-4 bg-primary border-2 border-background rounded cursor-se-resize opacity-0 group-hover:opacity-100 transition-opacity z-10";
      handle.style.cursor = "se-resize";
      
      let isResizing = false;
      let startX = 0;
      let startY = 0;
      let startWidth = 0;
      let startHeight = 0;
      
      const onMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = img.offsetWidth;
        startHeight = img.offsetHeight;
        
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };
      
      const onMouseMove = (e: MouseEvent) => {
        if (!isResizing) return;
        
        const diffX = e.clientX - startX;
        const diffY = e.clientY - startY;
        
        const aspectRatio = startHeight / startWidth;
        const newWidth = Math.max(100, Math.min(800, startWidth + diffX));
        const newHeight = newWidth * aspectRatio;
        
        img.style.width = `${newWidth}px`;
        img.style.maxWidth = `${newWidth}px`;
        img.style.height = `${newHeight}px`;
      };
      
      const onMouseUp = () => {
        if (!isResizing) return;
        isResizing = false;
        
        const width = img.offsetWidth;
        const height = img.offsetHeight;
        
        if (typeof getPos === "function") {
          const pos = getPos();
          if (pos !== undefined && pos !== null) {
            editor.commands.updateAttributes("image", {
              width: width.toString(),
              height: height.toString(),
            });
          }
        }
        
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      
      handle.addEventListener("mousedown", onMouseDown);
      
      container.appendChild(img);
      container.appendChild(handle);
      
      return {
        dom: container,
      };
    };
  },
});
