import React from "react";
import { useState } from "react";
import styled from "styled-components";

//Images
import DeviceImage from "../../assets/image/DeviceImage.jpg";
import OsImage from "../../assets/image/OsImage.jpg";
import KeyImage from "../../assets/image/KeyImage.jpg";
import MouseImage from "../../assets/image/MouseImg.jpg";
import InternetImage from "../../assets/image/What_isInternet_MLb1IZv.jpg";
import WebImage from "../../assets/image/Sublime_features__1_rM9Giup.jpg";
import SubImage from "../../assets/image/install_sublime_on_mac_os.jpg";
import ConfigImage from "../../assets/image/Configure_sublime_text_1.jpg";
import UbuntuImage from "../../assets/image/Configure_Sublime_on_ubuntu__2.jpg";
import SublimeImage from "../../assets/image/Configure_sublime_text_1.jpg";
import FeatureImg from "../../assets/image/Sublime_features.jpg";
import ShortImage from "../../assets/image/subshortcut.jpg";
import WindowImage from "../../assets/image/subwindows.jpg";
import SubLime from "../../assets/image/sublimewindows.jpg";
import UnzipImage from "../../assets/image/Unzipping_on_windows.jpg";
import ZipImage from "../../assets/image/zipping_on_windows.jpg";
import FileImage from "../../assets/image/01_-_Install_file_manager.jpg";
import FolderImage from "../../assets/image/02_-_Creating_a_folder.jpg";
import DataImg from "../../assets/image/03_-_Installing_code_editor_and_creating_files.jpg";
import CompressImage from "../../assets/image/04_-_How_to_compress_a_folder.jpg";
import EditorImg from "../../assets/image/05_-_Editor_Options.jpg";
import ChromeImg from "../../assets/image/06_-_Setting_chrome_as_default_browser.jpg";
import { data } from "jquery";
import DownloadImage from "../../assets/image/07_-_Download_and_show_images.jpg";
import UploadImage from "../../assets/image/08_-_Uploading_a_practice.jpg";
import AssetImage from "../../assets/image/09_-_Download_assets_and_extract.jpg";
import ConnectImage from "../../assets/image/10_-_Connecting_keyboard_in_android_phone.jpg";
import SearchImg from "../../assets/image/bx-search.svg";

function FreeGround() {
    const [devices, setDevices] = useState([
        {
            image: DeviceImage,
            description: "Devices",
            time: "5 mins, 17 secs",
        },
        {
            image: OsImage,
            description: "Operating Systems",
            time: "10 mins, 26 secs",
        },
        {
            image: KeyImage,
            description: "Keyboard shortcuts",
            time: "3 mins, 44 secs",
        },
        {
            image: MouseImage,
            description: "Mouse",
            time: "5 mins, 18 secs",
        },
    ]);

    const [internet, setInternet] = useState([
        {
            image: InternetImage,
            description: "What is Internet?",
            time: " 3 mins, 18 secs",
        },
        {
            image: WebImage,
            description: "What is Website?",
            time: " 3 mins, 45 secs",
        },
    ]);
    const [resource, setResource] = useState([
        {
            image: SubImage,
            description: "Install sublime on mac os",
            time: " 3 mins, 27 secs",
        },
        {
            image: ConfigImage,
            description: "Configure sublime on mac os",
            time: " 4 mins, 28 secs",
        },
        {
            image: UbuntuImage,
            description: "Install sublime on mac os",
            time: " 3 mins, 27 secs",
        },
        {
            image: SublimeImage,
            description: "Configure sublime on ubuntu",
            time: " 4 mins, 28 secs",
        },
        {
            image: FeatureImg,
            description: "Sublime features",
            time: " 6 mins, 4 secs",
        },
        {
            image: ShortImage,
            description: "Sublime shortcuts",
            time: " 6 mins, 28 secs",
        },
        {
            image: WindowImage,
            description: "Installing Sublime on Windows",
            time: "  1 mins, 7 secs",
        },
        {
            image: SubLime,
            description: "Installing VSCode on Windows",
            time: " 1 mins, 42 secs",
        },
        {
            image: UnzipImage,
            description: "Unzipping on windows",
            time: "28 secs",
        },
        {
            image: ZipImage,
            description: "Zipping on Windows",
            time: "31 secs",
        },
    ]);

    const [android, setAndroid] = useState([
        {
            image: FileImage,
            description: "Install file manager",
            time: " 5 mins, 11 secs",
        },
        {
            image: FolderImage,
            description: "Creating a folder",
            time: " 3 mins, 28 secs",
        },
        {
            image: DataImg,
            description: "Installing code editor and creating files",
            time: " 3 mins, 27 secs",
        },
        {
            image: CompressImage,
            description: "How to compress a folder",
            time: " 3 mins, 6 secs",
        },
        {
            image: EditorImg,
            description: "Editor Options",
            time: " 11 mins, 34 secs",
        },

        {
            image: ChromeImg,
            description: "Setting Chrome as default browser",
            time: " 6 mins, 4 secs",
        },

        {
            image: DownloadImage,
            description: "Download and show images",
            time: "  6 mins, 7 secs",
        },
        {
            image: UploadImage,
            description: "Uploading a practice",
            time: " 2 mins, 42 secs",
        },
        {
            image: AssetImage,
            description: "Download assets and extract",
            time: " 3 mins 5 secs",
        },
        {
            image: ConnectImage,
            description: "Connecting Keyboard in android phone",
            time: "2min  5secs",
        },
    ]);

    const fetchData = (datas) => {
        return datas.map((data) => (
            <Card>
                <Container>
                    <Top>
                        <ImgContainer>
                            <img src={data.image} alt="DeviceImage" />
                        </ImgContainer>
                    </Top>
                    <Box>
                        <span>{data.description}</span>
                        <span className="time">{data.time}</span>
                    </Box>
                </Container>
            </Card>
        ));
    };

    return (
        <div>
            <Ground>
                <Header>
                    <Left>
                        <h4>Free Ground</h4>
                        <p>
                            Free access for fundamental lessons to make your
                            journey filled with quality pieces of information!
                        </p>
                    </Left>
                    <Right>
                        <Search>
                            <img src={SearchImg} alt="" />
                        </Search>
                        <form action="">
                            <input
                                type="text"
                                placeholder="Search in free ground..."
                            />
                        </form>
                    </Right>
                </Header>

                <h3>Device</h3>
                <Bottom>{fetchData(devices)}</Bottom>
                <h3>Internet</h3>
                <Bottom>{fetchData(internet)}</Bottom>
                <h3>Resources</h3>
                <Bottom>{fetchData(resource)}</Bottom>
                <h3>Programming using Android Smartphone</h3>
                <Bottom>{fetchData(android)}</Bottom>
            </Ground>
        </div>
    );
}

export default FreeGround;
const Ground = styled.div`
    padding-left: 255px;
    margin-top: 45px;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
    h3 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        padding: 0px 22px;
        font-size: 18px;
        color: rgb(115, 115, 115);
        font-family: goridita_medium;
    }
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 34px 22px 28px;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;
const Left = styled.div`
    @media all and (max-width: 768px) {
        width: 100%;
    }
    h4 {
        font-size: 23px;
        margin-bottom: 3px;
        font-family: goridita_medium;
    }
    p {
        font-size: 14px;
        letter-spacing: 0.01rem;
        color: #868686;
        font-family: goridita_regular;
        @media all and (max-width: 980px) {
            max-width: 85%;
        }
        @media all and (max-width: 768px) {
            max-width: 100%;
        }
    }
`;
const Right = styled.div`
    padding: 0px 16px;
    display: flex;
    align-items: center;
    background: rgb(243, 243, 243);
    height: 39px;
    border-radius: 25px;
    width: 284px;
    @media all and (max-width: 768px) {
        margin-top: 5px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const Bottom = styled.div`
    padding: 0px 24px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    margin-bottom: 20px;
    @media all and (max-width: 980px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
    }
    h3 {
        font-size: 18px;
        color: rgb(115, 115, 115);
        font-family: goridita_medium;
        margin-bottom: 25px;
    }
`;
const Card = styled.div``;
const Container = styled.div``;
const Top = styled.div``;
const ImgContainer = styled.div`
    img {
        width: 100%;
        display: block;
    }
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    span {
        letter-spacing: 0.01rem;
        color: rgb(70, 70, 70);
        font-family: goridita_regular;
        font-size: 14px;
    }
    span.time {
        color: rgb(119, 119, 119);
        margin-top: 2px;
        font-family: goridita_regular;
        font-size: 13px;
    }
`;
const Search = styled.div`
    margin-right: 12px;
    width: 15px;
    img {
        width: 100%;
        display: block;
    }
`;
