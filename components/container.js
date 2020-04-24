import { Container } from "@material-ui/core";

export default function ContainerComponent({ children }) {
  return (
    <Container
      maxWidth="xl"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      {children}
    </Container>
  );
}
