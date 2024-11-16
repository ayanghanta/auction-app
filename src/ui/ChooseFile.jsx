import { IoCloseOutline } from "react-icons/io5";
import styles from "./ChooseFile.module.css";
import InputError from "./InputError";

function ChooseFile({
  children,
  selectedFiles,
  onSelectFiles,
  multiple = true,
  id,
  accept = "image/*",
  error,
}) {
  const handleFileChange = (e) => {
    const newFile = Array.from(e.target.files);

    console.log(newFile);

    if (newFile && !multiple) return onSelectFiles([...newFile]);
    if (newFile) {
      onSelectFiles((prevFiles) => [...prevFiles, ...newFile]);
    }
  };

  function handleRemoveImage(i) {
    const newFiles = [...selectedFiles];
    newFiles.splice(i, 1);
    onSelectFiles(newFiles);
  }
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.mulifileLabel}>
        {children}
      </label>
      <div className={styles.multlifileContainer}>
        {multiple ? (
          <input
            type="file"
            id={id}
            multiple
            onChange={handleFileChange}
            accept={accept}
          />
        ) : (
          <input
            type="file"
            id={id}
            onChange={handleFileChange}
            accept={accept}
          />
        )}
        <InputError error={error} />
        <div className={styles.muliImages}>
          <ul>
            {selectedFiles.map((file, i) => (
              <li key={i}>
                {file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className={styles.filePreview}
                  />
                )}
                <span className={styles.fileName}>
                  {file.name.length > 20
                    ? `${file.name.slice(0, 10)}...`
                    : file.name}
                </span>
                <IoCloseOutline
                  className={styles.remove}
                  onClick={() => handleRemoveImage(i)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChooseFile;
