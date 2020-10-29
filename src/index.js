import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Testimonial from './Components/Testimonial/Testimonial';
import Card from './Components/Card/Card';
import Faker from 'faker';
import Section from './Components/Section/Section';
import PricingSection from './Components/PricingSection/PricingSection';
import Location from './Components/Location/Location';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Banner />
				<Section sectionTitle="What Peple Are Saying About Us" id="testimonials">
					<Testimonial
						firstName={Faker.name.firstName()}
						lastName={Faker.name.lastName()}
						reviews={Faker.company.catchPhraseDescriptor()}
						description={Faker.lorem.paragraph()}
						avatar={Faker.image.avatar()}
					/>
					<Testimonial
						firstName={Faker.name.firstName()}
						lastName={Faker.name.lastName()}
						reviews={Faker.company.catchPhraseDescriptor()}
						description={Faker.lorem.paragraph()}
						avatar={Faker.image.avatar()}
					/>
				</Section>
				<PricingSection sectionTitle="Pricing" id="pricing">
					<Card price="$0" />
					<Card
						price="$20"
						perkTwo="24/7 customer support"
						perkThree="We will turn it on for you"
						perkFour="We watch your security for you"
					/>
					<Card price="$10" perkTwo="24/7 customer support" perkThree="We watch your security for you" />
				</PricingSection>
				<Location />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
