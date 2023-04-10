import { Button, Grid, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    const sentMail=()=>{

    }
    return (
        <div>
            <Grid container bgcolor="#153a5b" color="#ffffff" p={4}>
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <h4>
                        Help
                    </h4>
                    <Stack spacing={2}>
                        <Link className="help" to='/about'>About Us</Link>
                        <Link className="help">Our Story</Link>
                        <Link className="help">Our Goal</Link>
                    </Stack>

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={6}>
                    <h4>
                        Questions
                    </h4>

                    <Stack spacing={2}>
                        <Link className="help">FAQ's</Link>
                        <Link className="help" to='/termsAndCondition'>Terms & conditions</Link>
                        <Link className="help" to='/privacypolicy'>Privacy policy</Link>
                        <Link className="help" to='/return-refund-policy'>Return & refund policy</Link>
                    </Stack>

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <h4>
                        Contact Us
                    </h4>
                    <Box component="form" id="form">
                        <input type="email" required placeholder="Email" style={{ color: 'white', width: '90%', padding: "12px", border: 'none', borderBottom: '2px solid #ccc', outline: 'none', background: 'transparent' }} /><br /><br />
                        <textarea required placeholder="Your message" style={{ color: 'white', width: '90%', padding: "12px", border: "none", borderBottom: "2px solid #ccc", outline: 'none', background: 'transparent' }} minLength="20" maxLength="100"></textarea><br /><br />
                        <Button type="submit" color="info" variant="contained">
                            Contact us
                        </Button>
                    </Box>
                </Grid>
                <Stack spacing={2} direction='row' margin='5rem auto 0px'>
                    <Link className="social" to='https://www.facebook.com/profile.php?id=100087010851117'><FacebookIcon sx={{ fontSize: '2.5rem' }} /></Link>
                    <Link className="social" to='https://instagram.com/swarnsutra1?igshid=MDM4ZDc5MmU='><InstagramIcon sx={{ fontSize: '2.5rem' }} /></Link>
                    <Link className="social" to='https://wa.me/message/LIU6DVP35YHXI1?src=qr'><WhatsAppIcon sx={{ fontSize: '2.5rem' }} /></Link>
                </Stack>
                
                <Grid item lg={12} md={12} sm={12} xs={12} textAlign="center" >
                    <Box display="flex" alignItems="center" justifyContent="center" pt={2}>
                        <CopyrightIcon fontSize="small" />{`${new Date().getFullYear()} MKS Inc. All Rights Reserved.`}
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;