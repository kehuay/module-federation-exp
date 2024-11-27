
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "element-plus": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild__element_mf_2_plus__prebuild__.js")
          return pkg
        }
      ,
        "vue": async () => {
          let pkg = await import("__mf__virtual/remote__prebuild__vue__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "element-plus": {
            name: "element-plus",
            version: "2.8.8",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["element-plus"].loaded = true
              const {"element-plus": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^2.8.8"
            }
          }
        ,
          "vue": {
            name: "vue",
            version: "3.4.38",
            scope: ["default"],
            loaded: false,
            from: "remote",
            async get () {
              usedShared["vue"].loaded = true
              const {"vue": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "~3.4.38"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      