import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Testimonial from './Components/Testimonial/Testimonial';
import Card from './Components/Card/Card';
import Faker from 'faker';
import Section from './Components/Section/Section';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Banner />
				<Section sectionTitle="What Peple Are Saying About Us">
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
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
