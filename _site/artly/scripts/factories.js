
var artlyFactories = angular.module('artlyFactories', []);

artlyFactories.factory('painterFactory', 
	function(){
		var factory = {};
		var painters =
[
            {
				id: 0,
			    name: "Leonardo Da Vinci",
				epoch: "Renaissance",
				genre: "High Renaissance",
				bio: " Leonardo di ser Piero da Vinci was an Italian polymath, painter, sculptor, architect, musician, mathematician, engineer, inventor, anatomist, geologist, cartographer, botanist, and writer. He is widely considered to be one of the greatest painters of all time and perhaps the most diversely talented person ever to have lived. His genius, perhaps more than that of any other figure, epitomized the Renaissance humanist ideal.",
				img: "res/leonardo-self.jpg",
				gallery: [
					"res/gallery/r-vinci-man.jpg",
					"res/gallery/r-vinci-st_anna.jpg",
					"res/gallery/r-vinci-monalisa.jpg"
				]
			},
			{
				id: 1,
				name: "Claude Monet",
				genre: "Impressionism",
				epoch: "Modernism",
				bio: "Oscar-Claude Monet (14 November 1840 – 5 December 1926) was a founder of French Impressionist painting, and the most consistent and prolific practitioner of the movement\"s philosophy of expressing one\"s perceptions before nature, especially as applied to plein-air landscape painting. The term \"Impressionism\" is derived from the title of his painting Impression, soleil levant (Impression, Sunrise), which was exhibited in 1874 in the first of the independent exhibitions mounted by Monet and his associates as an alternative to the Salon de Paris.",
				img: "res/gallery/r-monet.jpg",
				gallery: [
					"res/gallery/r-monet-lillies.jpg",
					"res/gallery/r-monet-ladyingreen.jpg",
					"res/gallery/r-monet-sunrise.jpg"
				]
			} ,
			{
				id: 2,
				genre: "Avant-garde",
				epoch: "Modernism",
				name: "Kazimir Malevich",
				bio: "Kazimir Severinovich Malevich (23 February 1879 – 15 May 1935) was a Russian painter and art theoretician. He was a pioneer of geometric abstract art and the originator of the avant-garde, Suprematist movement.",
				img: "res/gallery/m-malevich.jpg",
				gallery: [
					"res/gallery/m-malevich-flowergirl.jpg",
					"res/gallery/m-malevich-square.png",
					"res/gallery/m-malevich-peasantgirl.jpg"
				]
			} ,
			{
				id: 3,
				name: "Lucas Cranach the Elder",
				genre: "Early Renaissance",
				epoch: "Renaissance",
				bio: "Lucas Cranach the Elder  c. 1472 – 16 October 1553) was a German Renaissance painter and printmaker in woodcut and engraving. He was court painter to the Electors of Saxony for most of his career, and is known for his portraits, both of German princes and those of the leaders of the Protestant Reformation, whose cause he embraced with enthusiasm, becoming a close friend of Martin Luther. He also painted religious subjects, first in the Catholic tradition, and later trying to find new ways of conveying Lutheran religious concerns in art.",
				img: "res/gallery/r-cranach.jpg",
				gallery: [
					"res/gallery/r-cranach-apollodiana.jpg ",
					"res/gallery/r-cranach-martinluther.jpg",
					"res/gallery/r-cranach-adameve.jpg"
				]
			} ,
			{
				id: 4,
				name: "Marcel Duchamp",
				genre: "Anti-art",
				epoch: "Modernism",
				bio: "Marcel Duchamp  (28 July 1887 – 2 October 1968) was a French, naturalized American painter, sculptor, chess player, and writer whose work is associated with Dadaism (anti-art) and conceptual art, although careful about his use of the term Dada and direct association with Dada groups. Duchamp is commonly regarded, along with Pablo Picasso and Henri Matisse, as one of the three artists who helped to define the revolutionary developments in the plastic arts in the opening decades of the twentieth century, responsible for significant developments in painting and sculpture. Duchamp has had an immense impact on twentieth-century and twenty first-century art. By World War I, he had rejected the work of many of his fellow artists (like Henri Matisse) as \"retinal\" art, intended only to please the eye. Instead, Duchamp wanted to put art back in the service of the mind.",
				img: "res/gallery/m-duchamp.jpg",
				gallery: [
					"res/gallery/m-duchamp-fountain.jpg",
					"res/gallery/m-duchamp-glass.jpg",
					"res/gallery/m-duchamp-lhooq.jpg"
				]
			},
			{
				id: 5,
				name: "Frida Kahlo",
				genre: "Primitivism",
				epoch: "Modernism",
				bio: "Frida Kahlo de Rivera (July 6, 1907 – July 13, 1954) was a Mexican painter who is best known for her self-portraits. Mexican culture and Amerindian cultural tradition are important in her work, which has been sometimes characterized as naive art or folk art. Her work has also been described as surrealist, and in 1938 André Breton, principal initiator of the surrealist movement, described Kahlo\"s art as a \"ribbon around a bomb\". Frida rejected the \"surrealist\" label; she believed that her work reflected more of her reality than her dreams.",
				img: "res/gallery/m-frida.jpg",
				gallery: [
					"res/gallery/m-frida-dorothy.jpg",
					"res/gallery/m-frida-portrait.jpg",
					"res/gallery/m-frida-raices.jpg"
				]
			},
			{
				id: 6,
				name: "Michelangelo Buonarroti",
				genre: "High Renaissance",
				epoch: "Renaissance",
				bio: "Michelangelo di Lodovico Buonarroti Simoni commonly known as Michelangelo, was an Italian sculptor, painter, architect, poet, and engineer of the High Renaissance who exerted an unparalleled influence on the development of Western art. Considered the greatest living artist in his lifetime, he has since been held as one of the greatest artists of all time. Despite making few forays beyond the arts, his versatility in the disciplines he took up was of such a high order that he is often considered a contender for the title of the archetypal Renaissance man, along with his fellow Italian Leonardo da Vinci.",
				img: "res/gallery/r-michelangelo.jpg",
				gallery: [
					"res/gallery/r-michelangelo-judgement.jpg",
					"res/gallery/r-michelagelo-creation.jpg",
					"res/gallery/r-michelangelo-capelle.jpg"
				]
			},
			{
				id: 7,
				name: "Giotto",
				genre: "Early Renaissance",
				epoch: "Renaissance",
				bio: "Giotto di Bondone, known as Giotto, was an Italian painter and architect from Florence in the late Middle Ages. He is generally considered the first in a line of great artists who contributed to the Italian Renaissance. Giotto\'s contemporary, the banker and chronicler Giovanni Villani, wrote that Giotto was \"the most sovereign master of painting in his time, who drew all his figures and their postures according to nature. And he was given a salary by the Comune of Florence in virtue of his talent and excellence.\"",
				img: "res/gallery/r-giotto.jpg",
				gallery: [
					"res/gallery/r-giotto-leged.jpg",
					"res/gallery/r-giotto-dante.jpg",
					"res/gallery/r-giotto-nativity.gif"
				]
			} ,
			{
				id: 8,
				name: "Pierre-Auguste Renoir",
				genre: "Impressionism",
				epoch: "Renaissance",
				bio: "Pierre-Auguste Renoir, commonly known as Auguste Renoir was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty, and especially feminine sensuality, it has been said that \"Renoir is the final representative of a tradition which runs directly from Rubens to Watteau.\" He was the father of actor Pierre Renoir (1885–1952), filmmaker Jean Renoir (1894–1979) and ceramic artist Claude Renoir (1901–69). He was the grandfather of the filmmaker Claude Renoir (1913–1993), son of Pierre.",
				img: "res/gallery/r-renoir.jpg",
				gallery: [
					"res/gallery/r-renoir-sisters.jpg",
					"res/gallery/r-renoir-swing.jpg",
					"res/gallery/r-renoir-theatre.jpg"
				]
			} ,
			{
				id: 9,
				name: "Pablo Picasso",
				genre: "Avant-garde",
				epoch: "Modernism",
				bio: "Pablo Ruiz y Picasso, also known as Pablo Picasso, was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. As one of the greatest and most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907), and Guernica (1937), a portrayal of the Bombing of Guernica by the German and Italian airforces at the behest of the Spanish nationalist government during the Spanish Civil War.",
				img: "res/gallery/m-picasso.jpg",
				gallery: [
					"res/gallery/m-picasso-bather.jpeg",
					"res/gallery/m-picasso-absinthe.jpg",
					"res/gallery/m-picasso-mandoline.jpg"
				]
			} , 
			{
				id: 10,
				name: "Henri Rousseau",
				genre: "Primitivism",
				epoch: "Modernism",
				bio: "Henri Julien Félix Rousseau was a French Post-Impressionist painter in the Naïve or Primitive manner. He was also known as Le Douanier (the customs officer), a humorous description of his occupation as a toll collector. Ridiculed during his lifetime by critics, he came to be recognized as a self-taught genius whose works are of high artistic quality. Rousseau's work exerted an extensive influence on several generations of avant-garde artists.",
				img: "res/gallery/m-rousseau.jpg",
				gallery: [
					"res/gallery/m-rousseau-dream.jpg",
					"res/gallery/m-rousseau-tiger.jpg",
					"res/gallery/m-rousseau-lion.jpg"
				]
			} , 
			{
				id: 11,
				name: "Hannah Höch",
				genre: "Anti-art",
				epoch: "Modernism",
				bio: "Hannah Höch was a German Dada artist. She is best known for her work of the Weimar period, when she was one of the originators of photomontage.",
				img: "res/gallery/m-hoch.jpg",
				gallery: [
					"res/gallery/m-hoch-knife.jpg",
					"res/gallery/m-hoch-platonischeliebe.jpg",
					"res/gallery/m-hoch-quietgirl.jpg"
				]
			} , 
			{
				id: 12,
				name: "Lauren K. Cannon",
				genre: "Digital Art",
				epoch: "21st Century Art",
				bio: "Lauren K. Cannon born in a small town in New Jersey, USA. She had an overflowing imagination since childhood and she gave life to her imagination through drawing. She describes her style as surreal fantasy and she is fascinated with the beautiful, the strange and the macabre. Lauren made an amazing portrait of the main character from “The Painted Man”, the recently released novel of Peter V. Brett. Lauren also designed the wards that appear on the author’s site and that will be featured on the US cover edition of the novel, which will be released by Del Rey Books in March 2009 with the title \"The Warded Man\".",
				img: "res/gallery/21-cannon.jpg",
				gallery: [
					"res/gallery/21-cannon-baalhu.jpg",
					"res/gallery/21-cannon-infinity.jpg",
					"res/gallery/21-cannon-evening.jpg"
				]
			} , 
			{
				id: 13,
				name: "Banksy",
				genre: "Street Art",
				epoch: "21st Century Art",
				bio: "Banksy is a pseudonymous English graffiti artist, political activist, film director, and painter. Although his identity has not been proven, reliable sources report that he is believed to be Robin Gunningham, a former public schoolboy at Bristol Cathedral Choir School. His satirical street art and subversive epigrams combine dark humour with graffiti executed in a distinctive stencilling technique. His works of political and social commentary have been featured on streets, walls, and bridges of cities throughout the world.",
				img: "res/gallery/21-banksy.jpg",
				gallery: [
					"res/gallery/21-banksy-betlehem.jpg",
					"res/gallery/21-banksy-nackedman.jpg",
					"res/gallery/21-banksy-rat.jpg"
				]
			} , 
			{
				id: 14,
				name: "Shepard Fairey",
				genre: "Street Art",
				epoch: "21st Century Art",
				bio: "Frank Shepard Fairey is an American contemporary street artist, graphic designer, activist and illustrator who emerged from the skateboarding scene. He first became known for his \"Andre the Giant Has a Posse\" (…OBEY…) sticker campaign, in which he appropriated images from the comedic supermarket tabloid Weekly World News.  He became widely known during the 2008 U.S. presidential election for his Barack Obama \"Hope\" poster. The Institute of Contemporary Art, Boston calls him one of today's best known and most influential street artists. His work is included in the collections at The Smithsonian, the Los Angeles County Museum of Art, the Museum of Modern Art in New York City, the Museum of Contemporary Art San Diego, the National Portrait Gallery in Washington, D.C., the Virginia Museum of Fine Arts in Richmond, and the Victoria and Albert Museum in London.",
				img: "res/gallery/21-shepard.jpg",
				gallery: [
					"res/gallery/21-shepard-Gigant.jpg",
					"res/gallery/21-shepard-obama.jpg",
					"res/gallery/21-shepard-theylive.jpg"
				]
			} , 
			{
				id: 15,
				name: "Salvador Dali",
				genre: "Surrealism",
				epoch: "Modernism",
				bio: "Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marqués de Dalí de Pubol known as Salvador Dalí was a prominent Spanish surrealist painter born in Figueres, Spain. Dalí was a skilled draftsman, best known for the striking and bizarre images in his surrealist work. His painterly skills are often attributed to the influence of Renaissance masters. His best-known work, The Persistence of Memory, was completed in August 1931. Dalí's expansive artistic repertoire included film, sculpture, and photography, in collaboration with a range of artists in a variety of media.",
				img: "res/gallery/m-dali.jpg",
				gallery: [
					"res/gallery/m-dali-persistence.jpg",
					"res/gallery/m-dali-gala.jpg",
					"res/gallery/m-dali-ship.jpg"
				]
			}
		];
		
		factory.getPainters = function(){
			return painters;
		}

		return factory;
	})
.factory('searchFactory', 
	function(){
		var factory = {};

		var searchParams = [
			{
				name: 'Epoch',
				options: [
					'Renaissance',
					'Modernism',
					'21st Century Art'
				]
			},
			{
				name: 'Genre',
				options: [
					'High Renaissance',
					'Early Renaissance',
					'Avant-garde',
					'Primitivism',
					'Anti-art',
					'Digital Art',
					'Street Art'
				],
			}
		];

		factory.getParams = function(){
			return searchParams;
		}

		return factory;
	}
)
.factory('epochFactory',
	function(){
		factory = {};
		
		var epochs = [
			{
				name: 'Renaissance',
				images: [
					'res/gallery/r-botticelli-venus.jpg',
					'res/gallery/r-rafael-madonna.jpg',
					'res/gallery/r-vinci-supper.jpg'
				],
				desc: 'The Renaissance marks the period of European history at the close of the Middle Ages and the rise of the Modern world. It represents a cultural rebirth from the 14th through the middle of the 17th centuries. Early Renaissance, mostly in Italy, bridges the art period during the fifteenth century, between the Middle Ages and the High Renaissance in Italy. It is generally known that Renaissance matured in Northern Europe later, in the 16th century.[49] One of the distinguishing features of Renaissance art was its development of highly realistic linear perspective.'
			},
			{
				name: 'Modernism',
				images: [
					'res/gallery/m-vangogh-starrynight.jpg',
					'res/gallery/m-vodkin-horse.jpg',
					'res/gallery/m-picasso-bather.jpeg'
				],
				desc: 'Modernism is a philosophical movement that, along with cultural trends and changes, arose from wide-scale and far-reaching transformations in Western society in the late 19th and early 20th centuries. Among the factors that shaped Modernism were the development of modern industrial societies and the rapid growth of cities, followed then by the horror of World War I. Modernism also rejected the certainty of Enlightenment thinking, and many modernists rejected religious belief.'
			},
			{
				name: '21st Century Art',
				images: [
					'res/gallery/21-12.gif',
					'res/gallery/21-04.jpg',
					'res/gallery/21-02.jpg',
					'res/gallery/21-03.jpg',
					'res/gallery/21-05.jpg'
				],
				desc: '21st Century Art is a mixture of different styles, fresh looks on art, and new technologies. As such an epoch does\'t actually exist, this is a product of Digital Art and Street Art genres, because Modern Art in classical meaning doesn\'t reach these movements. Unfortunately, most painters remain anonymous — that\'s why we\'ve included only some of the most well-known.  '
			}
		];

		factory.getEpochs = function(){
			return epochs;
		}

		return factory;
	}
).factory('galleryFactory', function(){
	factory = {};
	function getGallery(){
		var gallery = [
			{
				name: 'The Renaissance', //without The?
				images: [
					'res/gallery/r-01.jpg',
					'res/gallery/r-04.jpg',
					'res/gallery/r-03.jpg',
					'res/gallery/r-05.jpg',
					'res/gallery/r-06.jpg',
					'res/gallery/r-07.jpg',
					'res/gallery/r-08.jpg',
					'res/gallery/r-09.gif',
					'res/gallery/r-10.jpg',
					'res/gallery/r-11.jpg'
				]
			},
			{
				name: 'Modernism',
				images: [
					'res/gallery/m-01.jpg',
					'res/gallery/m-02.jpg',
					'res/gallery/m-03.jpg',
					'res/gallery/m-04.jpg',
					'res/gallery/m-05.jpg',
					'res/gallery/m-06.jpg',
					'res/gallery/m-07.jpg',
					'res/gallery/m-08.jpg',
					'res/gallery/m-09.jpg',
					'res/gallery/m-10.jpg'
				]
			},
			{
				name: '21st Century Art',
				images: [
					'res/gallery/21-01.jpg',
					'res/gallery/21-02.jpg',
					'res/gallery/21-03.jpg',
					'res/gallery/21-04.jpg',
					'res/gallery/21-05.jpg',
					'res/gallery/21-06.jpg',
					'res/gallery/21-07.jpg',
					'res/gallery/21-08.jpg',
					'res/gallery/21-09.png',
					'res/gallery/21-10.jpg',
					'res/gallery/21-11.jpeg',
					'res/gallery/21-12.gif',
					'res/gallery/21-13.jpg',
					'res/gallery/21-14.jpg',
					'res/gallery/21-15.jpg'
				]
			}
		];

		return gallery;
	}

	factory.getGallery = getGallery;

	return factory;
});
