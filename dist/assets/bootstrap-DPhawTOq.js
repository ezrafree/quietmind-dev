import{j as n,a as i,F as l}from"./emotion-react-jsx-runtime.browser.esm-DZ8Y4bS4.js";import{u as o}from"./index-CLyXWSfs.js";function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return i(l,{children:[n(e.h1,{children:"macOS Bootstrap"}),`
`,i(e.p,{children:["The Quiet Mind macOS Bootstrap sets up and configures a new macOS system — installing apps, applying settings, and getting you productive fast. Run it via ",n(e.code,{children:"quietmind.sh"}),"."]}),`
`,n(e.h2,{children:"Prerequisites"}),`
`,n(e.p,{children:"Before running the bootstrap script, complete the following steps."}),`
`,n(e.h3,{children:"Sign in to iCloud & App Store"}),`
`,n(e.p,{children:"Sign in to both iCloud and the App Store using your Apple ID."}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"iCloud:"})," System Settings → Apple ID"]}),`
`,i(e.li,{children:[n(e.strong,{children:"App Store:"})," Open the App Store app → Sign In"]}),`
`]}),`
`,n(e.h3,{children:"Install Xcode Command Line Tools"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`xcode-select --install
`})}),`
`,n(e.h2,{children:"Previewing the Script"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`curl -fsSL quietmind.sh | less
`})}),`
`,n(e.h2,{children:"Running the Script"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`curl -fsSL quietmind.sh | bash
`})}),`
`,n(e.h2,{children:"What's Included"}),`
`,i(e.p,{children:["Installs and configures ",n(e.a,{href:"https://github.com/ezrafree/dotfiles",children:"dotfiles"}),", ",n(e.a,{href:"https://github.com/ezrafree/phoenix-config",children:"Phoenix"})," for window management, and ",n(e.a,{href:"https://github.com/ezrafree/karabiner-config",children:"Karabiner-Elements"})," for custom keyboard shortcuts."]}),`
`,n(e.p,{children:"Also included are scripts to periodically clean up your Downloads folder and wipe your Screenshots folder."}),`
`,i(e.p,{children:["For a full picture of what gets installed, see the ",n(e.a,{href:"https://github.com/ezrafree/dotfiles/blob/main/Brewfile",children:"Brewfile"}),", ",n(e.a,{href:"https://github.com/ezrafree/dotfiles/blob/main/.config/bin/global-npm.sh",children:"global npm packages"}),", and ",n(e.a,{href:"https://github.com/ezrafree/dotfiles/blob/main/.config/bin/global-mas.sh",children:"App Store apps"})," in the dotfiles repo."]})]})}function a(r={}){const{wrapper:e}={...o(),...r.components};return e?n(e,{...r,children:n(t,{...r})}):t(r)}export{a as default};
