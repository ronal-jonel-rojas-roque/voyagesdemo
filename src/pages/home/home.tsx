import React from 'react'
import SectionOne from '../../components/homesections/sectionone/SectionOne'
import SectionTwo from '../../components/homesections/sectiontwo/SectionTwo'
import SectionThree from '../../components/homesections/sectionthree/SectionThree';
import SectionFour from '../../components/homesections/sectionfour/SectionFour';
import SectionFive from '../../components/homesections/sectionfive/SectionFive';
import SectionSix from '../../components/homesections/sectionsix/SectionSix';

export default function home() {
    return (
        <div>
            <section>
                <SectionOne />
            </section>
            <section>
                <SectionTwo />
            </section>
            <section>
                <SectionThree />
            </section>

            <section>
                <SectionFour />
            </section>

            <section>
                <SectionFive />
            </section>
            <section>
                <SectionSix />
            </section>
        </div>
    )
}
