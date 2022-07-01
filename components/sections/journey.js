import { Heading } from "@chakra-ui/react";
import AnimationWrapper from "../animation-wrapper/animation-wrapper";
import { BioCompany, BioCompanyAbout, BioCompanyTechologies, BioSection, BioWrapper, BioYear } from "../bio";

const Journey = () => (
    <>
        <AnimationWrapper>
            <Heading as="h3" variant="section-title">
                Journey
            </Heading>
        </AnimationWrapper>

        <AnimationWrapper>
            <BioSection>
                <BioYear>Dec 2020</BioYear>
                <BioWrapper>
                    <BioCompany>NextJS developer - System1Group, Remote, United Kingdom 🇬🇧</BioCompany>
                    <BioCompanyAbout>
                        World leaders in predicting and improving ad effectiveness. I was the main front end developer.
                        But there were also tasks related to the backend that I solved.
                        A lot of work was with the creation of presentable graphs on d3.
                        I also mentored the middle developer at the same time.
                        After that, he successfully passed the interview to the senior level.
                        <BioCompanyTechologies>
                            Technologies: NextJS, D3, NodeJS, Docker, AWS, MongoDB
                        </BioCompanyTechologies>
                    </BioCompanyAbout>
                </BioWrapper>
            </BioSection>
        </AnimationWrapper>

        <AnimationWrapper>
            <BioSection>
                <BioYear>Feb 2019</BioYear>
                <BioWrapper>
                    <BioCompany>Typescript developer - SciChart, Remote, United Kingdom 🇬🇧</BioCompany>
                    <BioCompanyAbout>
                        High loaded 2D/3D charts created by WebAssembly. Worked in a team of very professional developers.
                        The work was related to pulling С++ in javascript. it was a library for the fastest 2D and 3D charts in javascript.
                        But the responsibility didn&apos;t end there. There were sub-projects, such as creating a website with examples of charts,
                        customer support up to the debugging of their code, server-side rendering for SEO optimization.

                        <BioCompanyTechologies>
                            Technologies: React, NodeJS, Docker, Kubernetes, AWS, DynamoDB
                        </BioCompanyTechologies>
                    </BioCompanyAbout>
                </BioWrapper>
            </BioSection>
        </AnimationWrapper>

        <AnimationWrapper>
            <BioSection>
                <BioYear>Mar 2017</BioYear>
                <BioWrapper>
                    <BioCompany>Full-stack developer - TEAMinterantional, Ukraine 🇺🇦</BioCompany>
                    <BioCompanyAbout>
                        Had couple of the projects. First project was related to medical insurance in the USA.
                        Classic full-stack position. From creating front-end component to CRUD in C#.
                        Second project was related to improvement of ecology based on blockchain technology with own
                        tokens and work with Metamask. Also was two MVP projects.

                        <BioCompanyTechologies>
                            Technologies: PostgreSQL, Azure, Metamask, C#, Angular.js, React
                        </BioCompanyTechologies>
                    </BioCompanyAbout>
                </BioWrapper>
            </BioSection>
        </AnimationWrapper>

        <AnimationWrapper>
            <BioSection>
                <BioYear>Nov 2015</BioYear>
                <BioWrapper>
                    <BioCompany>Self-employed</BioCompany>
                    <BioCompanyAbout>
                        As a 3D&apos;s Max artist I had a huge experience related not only for 3D&apos;s Max
                        but for additional fields.
                        As a TeamLead, Mentor, Project Manager. For part time I was a tutor in 3D max.
                        Also had a small experience with Unreal Engine.
                    </BioCompanyAbout>
                </BioWrapper>
            </BioSection>
        </AnimationWrapper>
    </>
);

export default Journey;