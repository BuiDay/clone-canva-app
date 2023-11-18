import React from "react";

const EditorContent = () => {

    const handleActive = (e:any) => {
        
    }


    return (
        <div className="h-full w-full overflow-auto p-20">
            <div className="flex items-center flex-col gap-[200px]">
                <div className="h-[500px] w-[400px] bg-white relative overflow-hidden">
                    <div id="1" onClick={(e)=>handleActive(e)} className="h-[200px] w-[100px] bg-red-400" style={{transform:"translate(10px, 30px)"}}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorContent;
