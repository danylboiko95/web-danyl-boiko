import { Heading } from "@chakra-ui/react";
import AnimationWrapper from "../animation-wrapper/animation-wrapper";
import { BioCompany, BioCompanyAbout, BioCompanyTechologies, BioSection, BioWrapper, BioYear } from "../bio";
import WordWrapper from "../word-wrapper";

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
                        The product is a world leaders in predicting and improving ad effectiveness.
                        I am the main Front End developer in the team, supporting backend related tasks.
                        The main focus of my job is to implement the creation of presentable <WordWrapper text={'Graphs on d3'} />.
                        I also mentored the middle developer at the same time.
                        After that, he successfully passed the interview to the senior level.
                        <BioCompanyTechologies>
                            Technologies: TypeScript, SSR, NextJS, D3, NodeJS, Docker, AWS, MongoDB
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
                        High loaded 2D/3D charts created by WebAssembly. The work was related to pulling С++ in Javascript.
                        It was a library for the fastest 2D and 3D charts in Javascript.
                        There were sub-projects, such as creating a website with examples of charts,
                        customer support up to the debugging of their code, <WordWrapper text={'server-side'} /> rendering for SEO optimization.
                        <BioCompanyTechologies>
                            Technologies: React, TypeScript, SSR, WebGL, NodeJS, Docker, Kubernetes, AWS, DynamoDB
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

                        First is a USA Medical insurance based project. Classic <WordWrapper text={'Full-stack'} /> position.
                        From creating front-end component to CRUD in C#.

                        Second is ecology improvement based on <WordWrapper text={'blockchain'} /> technology with
                        own tokens and work with Metamask.
                        Becides of this, I have launched 2 MVP projects.

                        <BioCompanyTechologies>
                            Technologies: React, TypeScript, Metamask, GoogleApis, Thunk, Saga, Transition, Web3,
                            C# Web.Api, Webpack, PostgreSQL, Azure, Angular.js,
                        </BioCompanyTechologies>
                    </BioCompanyAbout>
                </BioWrapper>
            </BioSection>
        </AnimationWrapper>

        <AnimationWrapper>
            <BioSection>
                <BioYear>Nov 2015</BioYear>
                <BioWrapper>
                    <BioCompany>Self-employed 🇺🇦</BioCompany>
                    <BioCompanyAbout>
                        As a 3D&apos;s Max artist I had a huge experience related not only in 3D&apos;s Max
                        designing and rendering but also in other activities, as a TeamLead, Mentor, and Project Manager.
                        For part time I was a tutor in 3D&apos;s Max for begginers 
                        and explored <WordWrapper text={'unreal engine.'} />
                    </BioCompanyAbout>
                </BioWrapper>
            </BioSection>
        </AnimationWrapper>
    </>
);

export default Journey;