"use client";
import { useState, useCallback, useRef } from "react";
import Cropper from "react-easy-crop";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

export default function GoogleLensClone() {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);
  const imageRef = useRef(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setPredictions([]);
        setRelatedImages([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    getCroppedImage(); //this is the  Analysis of the cropped image automated.
  }, [image, croppedAreaPixels]);

  const analyzeImage = async (imageToAnalyze) => {
    if (!imageToAnalyze) return;

    setLoading(true);
    setPredictions([]);
    setRelatedImages([]);

    try {
      const model = await mobilenet.load();
      const img = new Image();
      img.src = imageToAnalyze;
      img.onload = async () => {
        const results = await model.classify(img);
        setPredictions(results);


        const searchQuery = results[0]?.className;
        if (!searchQuery) {
          setLoading(false);
          console.warn("No className found for predictions.");
          return;
        }

        const apiKey = "dgz8ykyEixBZuArX6ztvAR8k"; 
        const searchApiURL = `https://www.searchapi.io/api/v1/search?api_key=${apiKey}&engine=google_images&q=${encodeURIComponent(searchQuery)}`;

        try {
          const response = await fetch(searchApiURL);
          if (!response.ok) {
            throw new Error(`Search API error: ${response.statusText}`);
          }
          const searchData = await response.json();

          if (searchData.images) {
            const imagesWithTitles = searchData.images.map((img) => ({
              url: img.original?.link || img.thumbnail,
              title: img.title || "No title available",
            }));
            setRelatedImages(imagesWithTitles);
          }
        } catch (apiError) {
          console.error("Error fetching related images:", apiError);
        }
        setLoading(false);
      };
    } catch (error) {
      console.error("Error analyzing image:", error);
      setLoading(false);
    }
  };

  const getCroppedImage = useCallback(() => {
    if (!image || !croppedAreaPixels) return;

    const canvas = document.createElement("canvas");
    const img = new Image();
    img.src = image;
    img.onload = () => {
      const ctx = canvas.getContext("2d");
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      ctx.drawImage(
        img,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      const croppedImageData = canvas.toDataURL("image/jpeg");
      analyzeImage(croppedImageData);
    };
  }, [image, croppedAreaPixels]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
<div className="flex items-center justify-between max-w-7xl mx-auto mb-6 px-4">

  <img src="/header.webp" alt="Google Logo" width={85} height={40} />


  <div className="flex items-center space-x-8">
    <label htmlFor="file-upload" className="cursor-pointer">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleImageUpload}
      />
      <button
        onClick={() => document.getElementById("file-upload").click()}
        className="flex items-center space-x-2"
      >
        <img src="upload.png" width={20} height={30} alt="Upload" />
        <span className="text-[#202124] text-sm font-medium">Upload</span>
      </button>
    </label>


    <img
      className="h-7 w-7 cursor-pointer"
      src="drawer-icon-removebg-preview.png"
      alt="Menu"
    />


    <div className="w-8 h-8 bg-[#F4511E] rounded-full flex items-center justify-center text-sm text-white font-medium">
      P
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto bg-white p-6 shadow-lg rounded-lg flex gap-4 h-[80vh]">


        <div className="w-1/2 relative bg-black p-4 rounded-md h-full flex items-center justify-center ">
          {image ? (
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          ) : (
            <label
              htmlFor="file-upload"
              className="w-full h-full flex items-center justify-center cursor-pointer bg-gray-100 border-2 border-dashed border-gray-400 rounded-md"
            >
              Upload an Image
            </label>
          )}


          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="dot-animation">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}
        </div>


        <div className="w-1/2 relative overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Related Images</h2>
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <div className="w-8 h-8 border-t-4 border-blue-500 rounded-full animate-spin"></div>
              <p className="text-gray-500 text-sm">
                Image is being processed...
              </p>
            </div>
          ) : relatedImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {relatedImages.map((img, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-700 text-center">
                    {img.title}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No related images found.</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .dot-animation {
          display: flex;
          gap: 12px;
        }
        .dot {
          width: 24px;
          height: 24px;
          background-color: #999;
          border-radius: 50%;
          box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.3);
          animation: glow 1.5s infinite ease-in-out;
        }
        .dot:nth-child(1) {
          animation-delay: 0s;
        }
        .dot:nth-child(2) {
          animation-delay: 0.3s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.6s;
        }

        @keyframes glow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.4);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
