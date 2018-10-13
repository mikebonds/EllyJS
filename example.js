import { Element } from './index';

const container = Element(document.querySelector('.container'));

container.append(Element('p').text('This is a paragraph that was created and inserted by ').append('<strong>EllyJS.</strong>'));