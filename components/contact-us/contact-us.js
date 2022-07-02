import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react';
import AnimationWrapper from '../animation-wrapper/animation-wrapper';

export const ContactUs = () => {
    const form = useRef();
    const inputEmail = useRef();
    const textAreaMessage = useRef();
    const [isInputInvalid, setIsInputInvalid] = useState(null);
    const sendEmail = (e) => {
        e.preventDefault();
        const isValidInput = inputEmail.current.value
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )?.length !== 9
        setIsInputInvalid(isValidInput)

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
            form.current, process.env.NEXT_PUBLIC_EMAILJS_KEY
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <AnimationWrapper>
            <Box maxW={'400px'} margin={'0 auto'} display={"flex"} flexDirection={"column"} alignItems="center" flex={1}>
                <Heading as="h3" variant="section-title">Contact Me</Heading>
                <FormControl ref={form} onSubmit={sendEmail} style={{ width: '100%' }}>
                    <Box mt={6}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            borderColor={isInputInvalid && 'tomato'}
                            required
                            ref={inputEmail}
                            pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;'
                            type="email"
                            name="user_email"
                            autoComplete={false}
                            backgroundColor={"black"}
                        />
                        {isInputInvalid === true && (
                            <AnimationWrapper yValue={'0'} delay={0} duration={0.3}>
                                <Box position={'absolute'} fontSize={14} color="tomato">
                                    Without valid email I can not answer you 😞
                                </Box>
                            </AnimationWrapper>
                        )}

                    </Box>
                    <Box mt={6}>
                        <FormLabel>Message</FormLabel>
                        <Textarea ref={textAreaMessage} maxLength={255} name="message" height={100} required />
                    </Box>
                    <Button
                        variant={'ghost'}
                        border={"1px solid white"}
                        mt={6}
                        onClick={sendEmail}
                        type="submit"
                        float={'right'}
                    >
                        Send
                    </Button>
                </FormControl>
            </Box>
        </AnimationWrapper>

    );
};