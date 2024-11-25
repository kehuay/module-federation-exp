
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "vue-demi": async () => {
          let pkg = await import("__mf__virtual/host__prebuild__vue_mf_2_demi__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "vue-demi": {
            name: "vue-demi",
            version: "0.14.10",
            scope: ["default"],
            loaded: false,
            from: "host",
            async get () {
              usedShared["vue-demi"].loaded = true
              const {"vue-demi": pkgDynamicImport} = importMap 
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
              requiredVersion: "^0.14.10"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      