import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import {Image} from "react-bootstrap";
import logo2 from "../images/logo2.png";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>

                    <Column style={{marginLeft:-250, marginRight:50}}>
                        <Image img src={logo2} alt="logo"  width={200} height={100} />
                    </Column>
                    <Column style={{marginLeft:0, marginRight:50}}>
                        <Heading>Related Links</Heading>

                        <li> <FooterLink href="http://lms.eng.ruh.ac.lk/">LMS</FooterLink></li>

                        <li> <FooterLink href="https://www.ruh.ac.lk/">UOR</FooterLink></li>
                        <li><FooterLink href="https://www.ugc.ac.lk/">UGC</FooterLink></li></Column>

                    <Column style={{marginLeft:-100, marginRight:100,marginTop:45}}>
                        <li> <FooterLink href="http://www.eng.ruh.ac.lk/eec/">EEC</FooterLink></li>
                        <li> <FooterLink href="https://www.lib.ruh.ac.lk/web/Eng/index.php">LIBRARY</FooterLink></li>
                        <li><FooterLink href="https://ieee.lk/">IEEE</FooterLink> </li>
                    </Column>
                    <Column style={{marginLeft:-100, marginRight:50}}>
                        <Heading>Contact Us</Heading>
                        <li> <b>Address : Hapugala,Galle,Sri Lanka</b></li>
                        <li>   <b>Tel:+(94)0 91 2245765</b></li>
                        <li>  <b> Fax:+(94)0 91 2245762</b></li>
                    </Column>

                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
