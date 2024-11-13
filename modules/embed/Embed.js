function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}import React from"react";import{useRouter}from"next/router";import{v4 as uuidv4}from"uuid";import menuStyle from"/modules/menu/Menu.module.scss";import Live from"./Live";const configs={Live:{viewer:{name:"Viewer"},controller:{name:"Controller"},feed:{name:"Feed"},moderator:{name:"Moderator"}}},Module=e=>{var t=e?.availableConfigs??configs;useRouter();const[n,r]=React.useState(!1),[,a]=React.useState(null);var[m,,]=React.useState("Live"),[t,,]=React.useState(t?.Live??{});const[l,,]=React.useState("Controller");return React.useEffect(()=>{var e;n||(e=uuidv4(),a(e),r(!0))},[n]),React.createElement("div",{className:""+(e.className??"")},React.createElement("style",null,`
.embed_container {
    .menu {
        justify-content: flex-start;
    }
    margin-bottom: .5rem;
    justify-content: flex-start;
    transition: 200ms;
    .menuLinkSelector {
        width: fit-content;
        .menuItem {
            .menuIcon, .itemName {
                color: white;
                display: block;
            }
            .menuIcon {
                font-size: 1.25rem;
            }
        }
    }
    .menuLinkSelector:hover {

    }
    .selected, .selected:hover {
        background: green;
    }
    .selected:hover {
        border: 1px solid lightgreen;
        color: white;
        .material-icons {
            color: white;
        }
    }
    .menuLink:hover .menuLinkIcon {
        color: white;
    }
    ul {
        flex-wrap: wrap;
        margin: 0;
        list-style: none;
        padding: 0;
    }
    .red_button, .red_button:hover {
        background: red;
        border: 1px solid transparent;
    }
    .red_button:hover {
        border: 1px solid #ff6b6b;
    }
    .greenHover {
        border: 1px solid green;
    }
    .greenHover:hover {
        background: green;
        border: 1px solid lightgreen;
    }
}
.header1 {
    font-weight: 400;
    font-size: 1rem;
}
.simple_item_selector {
    border: 1px solid transparent;
    width: fit-content;
    padding: .25rem .5rem;
    border-radius: .25rem;
    transition: 200ms;
    > div {
        text-align: center;
        display: flex;
        align-items: center;
        gap: .25rem;
        p {
            font-size: .9rem;
            margin: 0;
        }
        .material-icons {
            font-size: 1.25rem;
        }
    }
}
.simple_item_selector:hover {
    border: 1px solid grey;
    background: rgb(35, 35, 35, 1);
}
.simple_item_selector_active {
    border: 1px solid grey;
    background: rgb(35, 35, 35, 1);
}
.simple_item_selector:active {
    border: 1px solid white;
}
                `),React.createElement("div",{className:"embed_container"},e?.simple?null:React.createElement("div",{className:`${menuStyle.subMenu} ${menuStyle.menu} menu embed_menu`},React.createElement("ul",null,React.createElement("li",{className:menuStyle.menuLink+" menuLinkSelector "+("Live"===m?"selected":"")},React.createElement("span",{className:menuStyle.subMenuItemContainer+" menuItem"},React.createElement("div",{className:menuStyle.itemName+" itemName"},"Live"),React.createElement("div",{className:`${menuStyle.subMenuItem} ${menuStyle.maxIconWidth} menuIcon tv material-icons`},"stream"))))),React.createElement("div",null,React.createElement("div",{className:`${menuStyle.subMenu} ${menuStyle.menu} menu embed_menu`,style:{marginBottom:".25rem"}},React.createElement("ul",{className:"flex gap-p5"},t&&Object.entries(t)?.map?Object.entries(t).map((e,t)=>React.createElement("li",{key:t,className:menuStyle.menuLink+" menuLinkSelector "+(l===e?.[1]?.name?"selected":"")},React.createElement("span",{className:menuStyle.subMenuItemContainer+" menuItem"},React.createElement("div",{className:menuStyle.itemName+" itemName"},e?.[1]?.name)))):null)),"Live"===m?React.createElement("div",null,React.createElement(Live,_extends({},e,{currentView:l,adminAuth:e?.adminAuth}))):null)))};export default Module;