import AppLayerSettings from "../components/AppLayerSettings";
import EditorContent from "../components/EditorContent";
import Header from "../components/Header";
import PageControl from "../components/PageControl";
import SideBar from "../components/SideBar";

const Layout = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col">
            <Header/>
            <div className="flex h-[93vh] w-full bg-[#EBECF0] relative top-[7vh]">
                <SideBar />
                <div className="w-[97%] h-full flex flex-col justify-between relative left-[3%]">
                    <div className="h-[5vh] w-full z-10 absolute top-0 left-0">
                        <AppLayerSettings />
                    </div>
                    <div className="w-full h-[83vh] absolute left-0 top-[4vh] bottom-[4vh]">
                        <EditorContent />
                    </div>
                    <div className="h-[5vh] w-full absolute bottom-0 z-10 left-0">
                        <PageControl/>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Layout;