import { useState } from "react";
import storage from "../../firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
import "./profile.scss";
import { Cancel, Close, Image } from "@mui/icons-material";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import ReactCrop, {centerCrop, makeAspectCrop} from "react-image-crop";
import "react-image-crop/src/ReactCrop.scss";
import "react-image-crop/dist/ReactCrop.css";


import ImageCropper from "./imagePreview.js";

import {useSelector} from "react-redux"
import {selectUser} from "../../Store/userSlice.js"


axios.defaults.withCredentials = true



const Profile = () => {

  const user = useSelector(selectUser)



  const [file, setFile] = useState("");
  const [image, setImage] = useState(null)
  const [cropped_file, setCroppedFile] = useState("");


  const [croppedImage, setCroppedImage] = useState();




  const getCroppedImg = (e) => {
    e.preventDefault();

    console.log(image)
    const canvas = document.createElement("canvas")

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height


    canvas.width = crop.width
    canvas.height = crop.height

    const ctx = canvas.getContext('2d')

    ctx.drawImage(
      file,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    )

    const base64Image = canvas.toDataURL('image/jpeg')
    setCroppedFile(base64Image)

    console.log(base64Image)

  }

  const [crop, setCrop] = useState({
    unit: 'px',
    width: 150,
    height: 150,
    x: 200,
    y: 200
    
  });

  const [imgUrl, setImgUrl] = useState("");
  const [ig, setIg] = useState("");
  const [ln, setLn] = useState("");
  const [tw, setTw] = useState("");
  const [web, setWeb] = useState("");

  const handleChange = (name) => (event) => {
    if (name === "ig") {
      setIg(event.target.value);
    } else if (name === "ln") {
      setLn(event.target.value);
    } else if (name === "tw") {
      setTw(event.target.value);
    } else if (name === "web") {
      setWeb(event.target.value);
    }
  };

  const current_user = JSON.parse(localStorage.getItem("jwt")).user;
  const current_token = JSON.parse(localStorage.getItem("jwt")).token;

  const [percent, setPercent] = useState(0);

  function handleImageChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload an image first!");
    }
    const filename = Date.now() + "_" + file.name;
    const storageRef = ref(storage, `/files/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url);
        });
      }
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedUserDetails = {
      avatar_url: imgUrl,
      instagram_link: ig,
      twitter_link: ln,
      linkedin_link: tw,
      other_link: web,
    };

    try {
      const res = await axios.put(`https://heroforfun.herokuapp.com/api/${user._id}`,updatedUserDetails, {withCredentials : true});
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(cropped_file)

  return (
    <div className="profile">
      <Navbar />

      <div className="form">
        <div className="form_wrapper">
          <form>
            <div className="head">Update Your Profile</div>

            {/* <button onClick={getCroppedImg}>xxxxx</button> */}

            <div className="image_input">
              <label>Profile Photo</label>

              <label htmlFor="file">
                <div className="select_image">
                  <p>Select Image</p>
                  <Image />
                </div>

                <input
                  type="file"
                  id="file"
                  onChange={handleImageChange}
                  accept="/image/*"
                  className="file_input"
                  style={{ display: "none" }}
                />
              </label>

              {file && (
                <div className="previewImgContainer">

                    <img
                      className="previewImg"
                      src={URL.createObjectURL(file)}
                      alt=""
                    />

                  <div className="previewCancelImg" onClick={() => setFile("")}>
                    <Cancel />
                  </div>

                  <p>{percent === 100 && " Image Uploaded"}</p>

                  <button onClick={handleUpload}>Upload Image</button>
                </div>
              )}




<ImageCropper
          imageToCrop={file}
          onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
        />

{croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img alt="Cropped Img" src={croppedImage} />
        </div>
      )}
            </div>

            <div className="links">
              <label>Instagram</label>
              <input
                type="text"
                value={ig}
                onChange={handleChange("ig")}
                placeholder="Your Instagram Link"
              />
              <label>LinkedIn</label>
              <input
                type="text"
                value={ln}
                onChange={handleChange("ln")}
                placeholder="Your LinkedIn Link"
              />
              <label>Twitter</label>
              <input
                type="text"
                value={tw}
                onChange={handleChange("tw")}
                placeholder="Your Twitter Link"
              />
              <label>Website/Other</label>
              <input
                type="text"
                value={web}
                onChange={handleChange("web")}
                placeholder="Your Other Links"
              />
            </div>

            <button onClick={onSubmit}>Upload Details</button>
          </form>
        </div>
      </div>

      <Footer />


    </div>
  );
};

export default Profile;
