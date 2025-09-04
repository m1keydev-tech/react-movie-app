import { Controller } from "react-hook-form";

// eslint-disable-next-line no-unused-vars
const FormField = ({ label, name, control, Component }) => {
  return (
    <>
      <div>
        <p className="mb-2 font-bold">{label}</p>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value, name } }) => {
            return (
              <Component
                onChange={onChange}
                value={value}
                name={name}
                control={control}
              />
            );
          }}
        />
      </div>
    </>
  );
};
export default FormField;
