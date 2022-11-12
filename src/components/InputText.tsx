import cx from "classnames";

interface InputTextProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (evento: any) => void;
  className?: string;
}

export function InputText({
  placeholder,
  name,
  value,
  onChange,
  className,
}: InputTextProps) {
  return (
    <input
      className={cx(
        "border border-zinc-400 p-3 px-4 bg-inherit text-inherit placeholder:text-inherit",
        className
      )}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}
