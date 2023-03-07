import { Container } from './styles'

import { useTheme } from "../../../../hooks/useTheme";

export function BoxInputs({ type = 'text', disabled, name, label, register, error, ...rest }) {
  const { themeIsActive } = useTheme();

  return (
    <Container error={error}>
      <span>{label}</span>
      <input 
        type={type} 
        disabled={disabled}
        className={themeIsActive && "dark_input"}
        {...register(name)}
        {...rest}
      />
      {error && <p>{error.message}</p>}
  </Container>
  );
}