export const scaleFunction = `
           (function() {
            // Инициализация при загрузке
            const initScale = () => {
              const block = document.getElementById('abstract');
              if (!block) return;
              
              const blockWidth = block.getBoundingClientRect().width;
              const scaleFactor = blockWidth / 1024;
               if(blockWidth >= 1024) {
              document.documentElement.style.setProperty('--scale-factor', 1);
              return;
              };
              document.documentElement.style.setProperty('--scale-factor', scaleFactor);

            };

            // Обновление при ресайзе
            const updateScale = () => {
              const block = document.getElementById('abstract');
              if (!block) return;
              
              const blockWidth = block.getBoundingClientRect().width;
              if(blockWidth >= 1024) {
              document.documentElement.style.setProperty('--scale-factor', 1);
              return;
              };
              const scaleFactor = blockWidth / 1024;
              document.documentElement.style.setProperty('--scale-factor', scaleFactor);
            
 

            };

            initScale();
            window.addEventListener('resize', updateScale);
            
            // Очистка
            return () => window.removeEventListener('resize', updateScale);
          })();
        `
