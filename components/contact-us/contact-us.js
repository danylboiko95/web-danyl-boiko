import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, FormLabel, Heading, Input, Spinner, Textarea } from '@chakra-ui/react';
import AnimationWrapper from '../animation-wrapper/animation-wrapper';
import DynamicText from '../dynamic-text/dynamic-text';

export const ContactUs = () => {
    const form = useRef();
    const inputEmail = useRef();
    const textAreaMessage = useRef();
    const [isInputInvalid, setIsInputInvalid] = useState(null);
    const [isTextAreaInvalid, setIsTextAreaInvalid] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isSuccessfully, setIsSuccessfully] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const errorMessage = 'Something went wrong. I send drones to fix it'
    const successfullySend = 'Your mail has been successfully sent, thank you!'

    const checkValidationInput = () => {

        const isInvalidInput = inputEmail.current.value
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )?.length !== 9

        setIsInputInvalid(isInvalidInput)
        return isInvalidInput;
    }
    const checkValidationTextArea = () => {
        const isInvalidTextArea = textAreaMessage.current.value?.length <= 2

        setIsTextAreaInvalid(isInvalidTextArea)
        return isInvalidTextArea;
    }

    const sendEmail = (e) => {

        e.preventDefault();
        const isInvalidInput = checkValidationInput()

        const isInvalidTextArea = checkValidationTextArea();

        setIsInputInvalid(isInvalidInput)
        setIsTextAreaInvalid(isInvalidTextArea)

        if (!isInvalidInput && !isInvalidTextArea) {
            setIsLoading(true)

            emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_KEY
            )
                .then((result) => {
                    setIsError(false)
                    setIsSuccessfully(true)
                    console.log(result.text);
                }, (error) => {
                    setIsError(true)
                    setIsLoading(false)
                    console.log(error.text);
                })
                .finally(() => {

                    setIsLoading(false)
                });

        }
    };

    return (
        <AnimationWrapper>
            <Box
                position={'relative'}
                margin={'0 auto'} display={"flex"} flexDirection={"column"} alignItems="center" flex={1}>
                {isSuccessfully
                    ? (<Heading as="h3" variant="section-title" textAlign={'center'}>
                        {successfullySend}
                    </Heading>)
                    : (
                        <>
                            <Box height={'30px'} fontSize={'22px'}>
                                <DynamicText loop showCursor text={["Contact Me", 'Hire Me', 'Work with Me']} />
                            </Box>
                            {isLoading && <Spinner
                                position={"absolute"}
                                top={'50%'}
                                left={"50%"}
                                transform={'translate(-50%,-50%)'}
                            />}
                            <form
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    opacity: `${isLoading ? 0.5 : 1}`,
                                    alignItems: 'center'

                                }}
                                ref={form}
                                onSubmit={sendEmail}
                            >
                                <Box mt={6}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        width={{ base: '70vw', md: '400px' }}
                                        ref={inputEmail}
                                        type="email"
                                        name="user_email"
                                        onChange={() => { isInputInvalid && checkValidationInput() }}
                                        disabled={isLoading}
                                    />
                                    {isInputInvalid === true && (
                                        <AnimationWrapper yValue={'0'} delay={0} duration={0.3}>
                                            <Box position={'absolute'}
                                                fontSize={{ base: "10px", smMd: "12px", md: "14px" }}
                                                color="tomato">
                                                Without valid email I wouldn&apos;t find you 😞
                                            </Box>
                                        </AnimationWrapper>
                                    )}
                                </Box>
                                <Box mt={6}>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        width={{ base: '70vw', md: '400px' }}
                                        ref={textAreaMessage}
                                        maxLength={255}
                                        name="message"
                                        onChange={() => { isTextAreaInvalid && checkValidationTextArea() }}
                                        height={100}
                                        disabled={isLoading} />

                                    {isTextAreaInvalid && (
                                        <AnimationWrapper yValue={'0'} delay={0} duration={0.3}>
                                            <Box position={'absolute'}
                                                fontSize={{ base: "10px", smMd: "12px", md: "14px" }}
                                                color="tomato">
                                                At least send me hello 👋😊
                                            </Box>
                                        </AnimationWrapper>
                                    )}
                                </Box>
                                <Button
                                    variant={'unstyled'}
                                    border={"1px solid white"}
                                    mt={8}
                                    padding={'0 10px'}
                                    disabled={isLoading}
                                    flex={1}
                                    onClick={sendEmail}
                                    type="submit"
                                    float={'right'}
                                    fontWeight="400"
                                >
                                    Send
                                </Button>

                                {isError &&
                                    <Box color={"tomato"} textAlign="center" mt={4}>
                                        {errorMessage}
                                    </Box>
                                }
                            </form>
                        </>)}
            </Box>
        </AnimationWrapper >

    );
};