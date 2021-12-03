import React, { useEffect, useRef } from "react";

import Styles from "./MenuFoodItem.module.css";
import VegIcon from "./../../VegIcon";
import { uploadFile } from "../../../Services/firebase.service";

function MenuFoodItem({ data, isEditing, onChangeFun, keyIndex }) {
  const fileInputRef = useRef(258);
  const imageRef = useRef(852);

  const nameRef = useRef(456);

  useEffect(() => {
    if (keyIndex === 0 && isEditing) {
      nameRef.current.focus();
    }
  }, [isEditing]);

  const handleFileChange = async (e) => {
    if (isEditing && onChangeFun) {
      const [file] = fileInputRef.current.files;
      if (file) {
        imageRef.current.src = URL.createObjectURL(file);
        // Upload image to firebase and call on change
        const downloadURL = await uploadFile(file, 'food');
        if (data.id) {
          onChangeFun(data.id, {
            ...data,
            image: downloadURL,
          });
        } else {
          onChangeFun(
            null,
            {
              ...data,
              image: downloadURL,
            },
            data.newID
          );
        }
      }
    }
  };

  const handleNameChange = (e) => {
    if (isEditing && onChangeFun) {
      if (data.id) {
        onChangeFun(data.id, {
          ...data,
          name: nameRef.current.value,
        });
      } else {
        onChangeFun(
          null,
          {
            ...data,
            name: nameRef.current.value,
          },
          data.newID
        );
      }
    }
  };

  const handleVegetarianChange = (e) => {
    if (isEditing && onChangeFun) {
      if (data.id) {
        onChangeFun(data.id, {
          ...data,
          isVeg: !data.isVeg,
        });
      } else {
        onChangeFun(
          null,
          {
            ...data,
            isVeg: !data.isVeg,
          },
          data.newID
        );
      }
    }
  };

  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.ImageWrapper}>
        <img
          ref={imageRef}
          src={data.image}
          alt={data.name}
          className={Styles.Image}
          onClick={() => {
            fileInputRef.current.click();
          }}
        />
        <input
          ref={fileInputRef}
          type="file"
          name="image"
          onChange={handleFileChange}
          className={Styles.ImageInput}
          disabled={!isEditing}
        />
      </div>
      <div className={Styles.FoodInfo}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleNameChange}
          className={Styles.Name}
          disabled={!isEditing}
          ref={nameRef}
        />
        <div className={Styles.VegIconWrapper} onClick={handleVegetarianChange}>
          <VegIcon isVeg={data.isVeg} isDefault={true} />
        </div>
      </div>
    </div>
  );
}

export default MenuFoodItem;
