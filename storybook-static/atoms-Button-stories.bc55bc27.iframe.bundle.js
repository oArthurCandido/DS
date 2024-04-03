"use strict";(self.webpackChunkbase_ui=self.webpackChunkbase_ui||[]).push([[952],{"./src/stories/atoms/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={parameters:{layout:"centered"},title:"Components/Button",component:__webpack_require__("./src/components/atoms/index.ts").$n,tags:["autodocs"],argTypes:{children:{type:"string"},variant:{options:["default","destructive","outline","secondary","ghost","link"],control:{type:"radio"}},size:{options:["default","sm","lg","icon"],control:{type:"radio"},onClick:function onClick(){return window.alert("Button Clicked")}}}};var Default={args:{children:"Button",variant:"default",size:"default",onClick:function onClick(){return window.alert("Button Clicked")}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Button",\n    variant: "default",\n    size: "default",\n    onClick: () => window.alert("Button Clicked")\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/atoms/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eu:()=>Avatar_Avatar,$n:()=>Button});var esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority_dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,bundle_mjs.QP)((0,clsx.$)(inputs))}var _excluded=["className","variant","size","asChild"],__jsx=react.createElement,buttonVariants=(0,class_variance_authority_dist.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,objectWithoutProperties.A)(_ref,_excluded),Comp=asChild?dist.DX:"button";return __jsx(Comp,(0,esm_extends.A)({className:cn(buttonVariants({variant,size,className})),ref},props))}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}};var react_avatar_dist=__webpack_require__("./node_modules/@radix-ui/react-avatar/dist/index.mjs"),base_excluded=["className"],_excluded2=["className"],_excluded3=["className"],base_jsx=react.createElement,Avatar=react.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,objectWithoutProperties.A)(_ref,base_excluded);return base_jsx(react_avatar_dist.bL,(0,esm_extends.A)({ref,className:cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",className)},props))}));Avatar.displayName=react_avatar_dist.bL.displayName;var AvatarImage=react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);return base_jsx(react_avatar_dist._V,(0,esm_extends.A)({ref,className:cn("aspect-square h-full w-full",className)},props))}));AvatarImage.displayName=react_avatar_dist._V.displayName;var AvatarFallback=react.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,objectWithoutProperties.A)(_ref3,_excluded3);return base_jsx(react_avatar_dist.H4,(0,esm_extends.A)({ref,className:cn("flex h-full w-full items-center justify-center rounded-full bg-muted",className)},props))}));AvatarFallback.displayName=react_avatar_dist.H4.displayName,Avatar.__docgenInfo={description:"",methods:[]},AvatarImage.__docgenInfo={description:"",methods:[]},AvatarFallback.__docgenInfo={description:"",methods:[]};var Avatar_excluded=["size","src","fallback","alt","className"],Avatar_jsx=react.createElement,avatarVariants=(0,class_variance_authority_dist.F)("",{variants:{size:{default:"h-10 w-10",sm:"h-9 w-9",lg:"h-11 w-11",xl:"h-14 w-14"}},defaultVariants:{size:"default"}}),Avatar_Avatar=react.forwardRef((function(props,ref){var size=props.size,src=props.src,fallback=props.fallback,alt=props.alt,className=props.className,rest=(0,objectWithoutProperties.A)(props,Avatar_excluded);return Avatar_jsx(Avatar,(0,esm_extends.A)({ref,className:cn(avatarVariants({size,className}))},rest),Avatar_jsx(AvatarImage,{src,alt}),fallback&&Avatar_jsx(AvatarFallback,null,fallback))}));Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar"}}}]);