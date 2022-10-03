import React from "react";
import { useForm } from "react-hook-form";
import "./Input.scss";

const Input = ({ InputName, onSubmitInput }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmitInput)}>
      <div>
        <div className="demo-flex-spacer"></div>
        <div className="webflow-style-input">
          <input
            className="submit"
            placeholder="ingresa pokemon"
            {...register("PokemonSearch", { required: true, maxLength: 5 })}
          />
          <input type="submit" />
        </div>
      </div>
      {console.log(errors.PokemonSearch)}
      {errors.PokemonSearch?.type === "required" && (
        <p role="alert">First name is required</p>
      )}{" "}
      {errors.PokemonSearch?.type === "maxLength" && (
        <p role="alert">solo 5 caracteres</p>
      )}{" "}
    </form>
  );
};

export default Input;
