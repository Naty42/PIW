import { Box, Container, TextField, Typography, Button, Link } from "@mui/material"

const Signin = () => {
    return (
        <Container maxWidth= "xs">
            <Box
                sx = {{
                    display:"flex",
                    flexDirection:"column",
                    alignItem:"center",
                    justifyContent:"center",
                    mt:10
                }}
            >
                <Typography component="h1" variant="h1" align="center">
                    Sign in 
                </Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id = "email"
                    label = "Endereço de e-mail"
                    name = "e-mail"
                    autoComplete = "e-mail"
                    autofocus
                ></TextField>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id = "email"
                    label = "senha"
                    name = "senha"
                    type="password"
                ></TextField>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx= {{mt:3, mb:2}}
                >Sign in</Button>
            </Box>
            <Box 
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Link href="#" underline="none" className="link">
                    Esqueceu a senha?
                </Link>
                <Link href="#" underline="none" className="link">
                    Não tem conta? Cadastre-se
                </Link>
            </Box>
        </Container>
    )
}

export default Signin