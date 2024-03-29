import SearchContainer from "../components/search/SearchContainer";
import CalculateResult from "../components/result/CalculateResult";
import {useEffect, useLayoutEffect, useRef} from "react";
import {CapabilityForm, NetsatForm} from "../components/form/NetsatForm";
import {
    ArchContainer,
    ArtContainer,
    EduContainer,
    LanguagesContainer,
    MedContainer,
} from "../components/form/CapabilityContainer";
import {
    blurScreenState,
    calState,
    capabilityID,
    capabilityScore,
    dataStore,
    engTestStore,
} from "../States/States";
import {useRecoilState, useSetRecoilState} from "recoil";
import Footer from "../components/Footer";
import {getApi} from "../features/ApiFeatures";
import LoadingPage from "./LoadingPage";

const CalculatePage = () => {
    const [blur, setBlur] = useRecoilState(blurScreenState);
    const [trigger, setTrigger] = useRecoilState(calState);
    const [capScore, setCapScore] = useRecoilState(capabilityScore);
    const setForm = useSetRecoilState(capabilityID);
    const capabilityFormRef = useRef<HTMLFormElement>(null!);
    const engineerFormRef = useRef<HTMLFormElement>(null!);
    const calculatePageRef = useRef<HTMLDivElement>(null!);
    const initial = useRef(true);
    const [data, setData] = useRecoilState(dataStore);
    const [engData, setEngData] = useRecoilState(engTestStore);

    useEffect(() => {
        /* Fetching data from the API. */
        getApi("netsat").then((res) => {
            setData(res.data);
        });
        getApi("netsat/engtest").then((res) => {
            setEngData(res.data);
        });
    }, []);

    useLayoutEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        if (calculatePageRef.current.classList.contains("blurScreen")) {
            calculatePageRef.current.classList.remove("blurScreen");
            document.body.style.overflowY = "scroll";
        } else {
            calculatePageRef.current.classList.add("blurScreen");
            document.body.style.overflowY = "hidden";
        }
    }, [blur]);

    return (
        <main className="h-screen ">
            {data.length === 0 && Object.keys(engData).length === 0 ? (
                <LoadingPage/>
            ) : (
                <div>
                    <SearchContainer/>
                    <form ref={capabilityFormRef} onSubmit={(e) => e.preventDefault()}>
                        <LanguagesContainer/>
                        <ArtContainer/>
                        <EduContainer/>
                        <MedContainer/>
                        <ArchContainer/>
                    </form>
                    <div
                        id="calculatePage"
                        ref={calculatePageRef}
                        className="w-screen m-auto px-5 h-screen"
                    >
                        <div
                            className="my-7 font-mitr relative bg-white px-6 py-3 shadow-sm ring-1 ring-gray-900/5 m-auto max-w-2xl rounded-lg">
                            <h1 className="text-text_primary text-2xl text-center">
                                คำนวณคะแนน Netsat
                            </h1>
                            <section className="border-b-2 md:flex md:justify-around">
                                <NetsatForm/>
                                <form ref={engineerFormRef}>
                                    <CapabilityForm/>
                                </form>
                            </section>

                            <p className="text-xs text-secondary w-fit mt-3">
                                * ภาษาไทยและภาษาอังกฤษใช้คะแนนร้อยละ
                            </p>

                            <div className="mt-5 flex font-[Kanit] align-baseline">
                                <button
                                    onClick={() => {
                                        setBlur(!blur);
                                        setForm("searchContainer");
                                    }}
                                    className="cursor-pointer select-none border-b-2 text-base text-white bg-purple-500 w-fit py-2 px-5 rounded-xl flex m-auto mt-3 hover:bg-purple-300 lg:px-12 lg:mt-5"
                                >
                                    เลือกคณะ
                                </button>
                                <button
                                    onClick={() => {
                                        setCapScore(() => {
                                            const prevClone = structuredClone(capScore);
                                            prevClone.fr = parseFloat(
                                                capabilityFormRef.current["fr"].value
                                            );
                                            prevClone.gr = parseFloat(
                                                capabilityFormRef.current["gr"].value
                                            );
                                            prevClone.cn = parseFloat(
                                                capabilityFormRef.current["cn"].value
                                            );
                                            prevClone.jp = parseFloat(
                                                capabilityFormRef.current["jp"].value
                                            );
                                            prevClone.kr = parseFloat(
                                                capabilityFormRef.current["kr"].value
                                            );

                                            prevClone.drawing = parseFloat(
                                                capabilityFormRef.current["drawing"].value
                                            );
                                            prevClone.makeup = parseFloat(
                                                capabilityFormRef.current["makeup"].value
                                            );
                                            prevClone.engineer = parseFloat(
                                                engineerFormRef.current["engineer"].value
                                            );
                                            prevClone.drawcom = parseFloat(
                                                capabilityFormRef.current["drawcom"].value
                                            );
                                            prevClone.vart = parseFloat(
                                                capabilityFormRef.current["vart"].value
                                            );
                                            prevClone.music = parseFloat(
                                                capabilityFormRef.current["music"].value
                                            );
                                            prevClone.dance = parseFloat(
                                                capabilityFormRef.current["dance"].value
                                            );

                                            prevClone.arch = parseFloat(
                                                capabilityFormRef.current["arch"].value
                                            );
                                            prevClone.design = parseFloat(
                                                capabilityFormRef.current["design"].value
                                            );

                                            prevClone.body = parseFloat(
                                                capabilityFormRef.current["body"].value
                                            );
                                            prevClone.goodatart = parseFloat(
                                                capabilityFormRef.current["goodatart"].value
                                            );

                                            prevClone.techmed = parseFloat(
                                                capabilityFormRef.current["techmed"].value
                                            );
                                            prevClone.artmed = parseFloat(
                                                capabilityFormRef.current["artmed"].value
                                            );
                                            for (const key of Object.keys(prevClone)) {
                                                if (prevClone[key] > 100) prevClone[key] = 100;
                                            }
                                            return prevClone;
                                        });
                                        setTrigger(!trigger);
                                    }}
                                    className="cursor-pointer select-none border-b-2 text-base text-white bg-green-500 w-fit py-2 px-5 rounded-xl flex m-auto mt-3 hover:bg-green-300  lg:px-12 lg:mt-5"
                                >
                                    คำนวณ
                                </button>
                            </div>
                        </div>
                        <CalculateResult/>
                        <Footer/>
                    </div>
                </div>
            )}
        </main>
    );
};

export default CalculatePage;
