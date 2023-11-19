import React, { useCallback, useState } from "react";
import { dragItem } from "../utils/dragItem";

const EditorContent = () => {

    const handleActive = useCallback ((e: any) => {
        
        dragItem(e);
    },[])

    const handleMouseEnter = useCallback ((e: any) => {
        const top = Number(e.target.style.top.split("px")[0]) - 3
        const left = Number(e.target.style.left.split("px")[0]) - 3
        // console.log(e.target.style)
        const temp = document.getElementById("demo");
        const node = document.createElement("div");
        node.id = "item_hover";
        // node.style.zIndex ="999"
        node.style.background ="transparent"
        node.style.position= "absolute"
        node.style.border = "4px solid blue"
        node.style.width = "106px";
        node.style.height = "206px";
        node.style.top = `${top}px`;
        node.style.left = `${left}px`;
        temp?.appendChild(node);
    },[])

    const handleMouseLeave = useCallback ((e: any) => {
        const temp = document.getElementById("item_hover");
        temp?.remove();
    },[])

    const temp = () => {
        console.log(1)
    }

    return (
        <div className="h-full w-full overflow-auto p-20">
            <div className="flex items-center flex-col gap-[200px]">
                <div className="h-[500px] w-[400px] bg-white relative">
                    <div className="h-[500px] w-[400px] bg-transparent absolute top-0 left-0  overflow-hidden">
                        <div id="1" onClick={(e) => handleActive(e)} onMouseOut={handleMouseLeave} onMouseOver={handleMouseEnter} className="absolute bg-red-400 z-[10]" style={{height:"200px",width:"100px"}}>
                        </div>
                        <div id="2" onClick={(e) => handleActive(e)} onMouseOut={handleMouseLeave} onMouseOver={handleMouseEnter} className="absolute bg-yellow-400 z-[12]" style={{height:"200px",width:"100px",top:"50px",left:"10px"}}>
                        </div>
                        <div id="3" onClick={(e) => handleActive(e)} onMouseOut={handleMouseLeave} onMouseOver={handleMouseEnter} className="absolute bg-blue-400 z-[13]" style={{height:"200px",width:"100px",top:"100px",left:"100px"}}>
                        </div>
                        <div id="4" onClick={(e) => handleActive(e)} onMouseOut={handleMouseLeave} onMouseOver={handleMouseEnter} className="absolute bg-green-400 z-[14]" style={{height:"200px",width:"100px",top:"200px",left:"200px"}}>
                        </div>
                    </div>
                    <div id="demo" className="absolute top-0 left-0">
                        {/* <div className="absolute h-[200px] w-[100px] border-black border" >
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditorContent;
