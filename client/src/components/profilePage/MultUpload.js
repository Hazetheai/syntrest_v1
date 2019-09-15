/**@jsx jsx */

import { Fragment, useState } from "react";
import axios from "axios";
import { jsx, css } from "@emotion/core";

const Upload = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    if (e.target.files.length >= 1) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    // The string here references "const {file} = req.files;" in multFileUpload.js
    formData.append("image", file);

    try {
      const res = await axios.post("/services/files/image-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      res.status === 200 ? setFile("") : console.error("res", res);
    } catch (err) {
      if (err.response.status === 500) {
        console.error("There was a problem with the server");
      } else {
        console.error(err.response.data.msg);
      }
      console.error("err", err);
    }
  };

  const inputs = css({
    width: "100%",
    padding: "10px",
    borderColor: "#008F11",
    borderWidth: "5px",
    borderRadius: "5px"
  });
  return (
    <div>
      <Fragment>
        <form
          onSubmit={onSubmit}
          css={{
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem"
          }}
        >
          <div
            className="form-group"
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%"
            }}
          >
            <input
              css={inputs}
              type="file"
              className="form-control-file"
              id="customFile"
              onChange={onChange}
            />
            <label
              htmlFor="customFile"
              css={{
                width: "30%",
                backgroundColor: "black",
                color: "#008F11",
                cursor: "pointer",
                padding: "0.4rem 0.6rem 0.4rem 0.6rem",
                borderRadius: "0.5rem",
                border: "transparent",
                margin: "0.4rem",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
                display: "inline-block",
                transition: "all 0.2s",
                position: "relative",
                fontSize: "1.6rem",
                "&:hover": {
                  boxShadow: "0 1px 1px rgba(17, 17, 17, 0.2)",
                  "&::after": {
                    transform: "scaleX(1.4)",
                    opacity: 0
                  }
                }
              }}
            >
              {fileName}
            </label>
          </div>
          <input css={inputs} type="submit" value="Upload" className="btn" />
        </form>

        {uploadedFile.fileName ? (
          <div>
            <h3>{uploadedFile.fileName}</h3>
            <img
              src={uploadedFile.filePath}
              alt="uploaded file"
              css={{
                width: "50%"
              }}
            />
          </div>
        ) : null}
      </Fragment>
    </div>
  );
};

export default Upload;
