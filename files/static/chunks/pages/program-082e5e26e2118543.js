(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[860], {
		1758: e => {
			e.exports = {
				header: "Header_header__5ZApI",
				headerContainer: "Header_headerContainer__4fCFu",
				logo: "Header_logo__ULYlI",
				menu: "Header_menu__F0oZj",
				menuList: "Header_menuList__gr7bb",
				menuItem: "Header_menuItem__qfkrG"
			}
		},
		3208: (e, s, n) => {
			"use strict";
			n.d(s, {
				A: () => h
			});
			var l = n(7876);
			n(4232);
			var r = n(8230),
				i = n.n(r),
				t = n(1758),
				a = n.n(t),
				c = n(5039),
				d = n.n(c);

			function h() {
				let e = function(s) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return(0, l.jsx)("ul", {
						className: a().menuList,
						"data-depth": n,
						children: s.map(s => (0, l.jsxs)("li", {
							children: [(0, l.jsx)(i(), {
								href: s.path,
								className: a().menuItem,
								"data-depth": n,
								children: s.name
							}), s.children && e(s.children, n + 1)]
						}))
					})
				};
				return(0, l.jsx)("header", {
					className: a().header,
					children: (0, l.jsxs)("div", {
						className: d()(a().headerContainer, "container"),
						children: [(0, l.jsx)("div", {
							className: a().logo,
							children: (0, l.jsx)("img", {
								src: "./images/logo.png",
								className: a().logoImage,
								alt: ""
							})
						}), (0, l.jsx)("nav", {
							className: a().menu,
							children: e([{
								name: "Главная",
								path: "/"
							}, {
								name: "Новости",
								path: "/stats"
							}, {
								name: "Программа",
								path: "/program"
							}, {
								name: "Авторы",
								path: "/events"
							}, {
								name: "Контакты",
								path: "/settings"
							}])
						})]
					})
				})
			}
			n(4635)
		},
		4635: (e, s, n) => {
			"use strict";
			n.d(s, {
				A: () => c
			});
			var l = n(7876);
			n(4232), n(8230);
			var r = n(5233),
				i = n.n(r),
				t = n(5039),
				a = n.n(t);

			function c(e) {
				let {
					children: s,
					type: n = "red"
				} = e;
				return(0, l.jsx)("button", {
					className: a()(i().button, i()[n]),
					children: s
				})
			}
		},
		5233: e => {
			e.exports = {
				button: "Button_button__YyFph",
				red: "Button_red__Ovcr7",
				white: "Button_white__G8kma"
			}
		},
		5409: e => {
			e.exports = {
				header: "style_header__OZPfK",
				progress: "style_progress__8oXm1",
				content: "style_content__L69PO",
				slide: "style_slide__h1hAk",
				hero: "style_hero__naASB",
				heroSmall: "style_heroSmall__Z2prK",
				disabled: "style_disabled__YeIVH",
				dymokImg: "style_dymokImg__obpJF",
				lead: "style_lead__18rum",
				card: "style_card__DWBVA",
				exercise: "style_exercise__RPz9t",
				orchestraCard: "style_orchestraCard__QNapk",
				orchestraImg: "style_orchestraImg__UCTvh",
				orchestraLabel: "style_orchestraLabel__plDHG",
				hint: "style_hint__STlPL",
				controls: "style_controls__Lu_9K",
				button: "files/",
				smallBtn: "style_smallBtn__SeTvT",
				situationCard: "style_situationCard__9LoeG",
				situationImg: "style_situationImg__eXg_Q",
				emotionIcons: "style_emotionIcons__8gtj8",
				emotionBtn: "style_emotionBtn__6SucF",
				feedback: "style_feedback__dBduj",
				ok: "style_ok__kcrM8",
				fail: "style_fail__F_F6W",
				roleCard: "style_roleCard__0z51B"
			}
		},
		6310: (e, s, n) => {
			"use strict";
			n.r(s), n.d(s, {
				default: () => h
			});
			var l = n(7876),
				r = n(4232),
				i = n(5039),
				t = n.n(i),
				a = n(5409),
				c = n.n(a),
				d = n(3208);

			function h() {
				let [e, s] = (0, r.useState)(0), [n, i] = (0, r.useState)(!1), a = [{
					id: "intro",
					title: "Занятие 1. \xabПривет, Дымок! Знакомство с миром эмоций\xbb",
					jsx: (0, l.jsxs)("div", {
						children: [(0, l.jsx)("div", {
							className: c().hero,
							style: {
								display: "inline",
								width: "25%",
								float: "left"
							},
							children: (0, l.jsx)("img", {
								src: "./images/dragon/hello.png",
								alt: "Дымок машет",
								className: c().dymokImg,
								style: {
									width: "100%"
								}
							})
						}), (0, l.jsx)("p", {
							className: c().lead,
							children: "Вступление: Привет-привет! О-о-ой, как же я рад тебя видеть! Меня зовут Дымок, я маленький огненный дракончик. Но не пугайся, мой огонь совсем не горячий, а волшебный, он помогает согревать сердца и дружить с эмоциями! А ты хочешь подружиться с эмоциями? Тогда ты зашёл точно по адресу!"
						}), (0, l.jsx)("p", {
							children: "Знаешь, а я тут подумал... Мы с тобой сейчас как настоящие исследователи, которые отправляются в увлекательную экспедицию. Только изучать мы будем не джунгли и не звёзды, а целый мир, который живёт внутри каждого из нас! Это мир наших чувств и эмоций."
						}), (0, l.jsx)("h4", {
							children: "А что же такое эмоции?"
						}), (0, l.jsx)("p", {
							children: "Представь, что внутри у тебя есть специальный прибор, как барометр у метеорологов, который показывает \xabпогоду в душе\xbb. Вот этот прибор и есть наши эмоции!"
						}), (0, l.jsxs)("ul", {
							children: [(0, l.jsx)("li", {
								children: "Когда тебе весело и хочется смеяться — в твоём внутреннем мире светит солнышко."
							}), (0, l.jsx)("li", {
								children: "Когда ты немножко грустишь — набегают лёгкие облачка."
							}), (0, l.jsx)("li", {
								children: "Когда ты злишься — может начаться настоящая гроза."
							}), (0, l.jsx)("li", {
								children: "А если ты испугался — будто подул холодный ветерок."
							})]
						}), (0, l.jsx)("p", {
							children: "Эмоции — это наши внутренние сигналы. Они говорят нам, что происходит вокруг и как мы к этому относимся. И все они, даже самые грозные и неприятные, очень-очень важны! Без них мы были бы как роботы. Правда, скучно?"
						})]
					})
				}, {
					id: "types",
					title: "Какие же бывают эмоции?",
					jsx: (0, l.jsxs)("div", {
						children: [(0, l.jsx)("p", {
							children: "Эмоций очень-очень много, почти как красок в самой большой коробке карандашей! Но у них, как и у красок, есть основные цвета. Давай познакомимся с четырьмя самыми главными!"
						}), (0, l.jsxs)("section", {
							className: c().card,
							children: [(0, l.jsx)("h5", {
								children: "1. РАДОСТЬ"
							}), (0, l.jsxs)("p", {
								children: [(0, l.jsx)("strong", {
									children: "ДЫМОК:"
								}), " Это моя самая любимая эмоция! Она похожа на праздничный салют. Когда мы радуемся, нам хочется улыбаться, смеяться, прыгать от счастья и делиться этим чувством со всеми вокруг. Тело становится лёгким, как пёрышко!"]
							}), (0, l.jsx)("p", {
								children: "Когда приходит? Когда получается сложная задача, когда встречаешь друга, когда тебя хвалят или просто потому, что день такой замечательный!"
							})]
						}), (0, l.jsxs)("section", {
							className: c().card,
							children: [(0, l.jsx)("h5", {
								children: "2. ГРУСТЬ"
							}), (0, l.jsxs)("p", {
								children: [(0, l.jsx)("strong", {
									children: "ДЫМОК:"
								}), " Эту эмоцию многие не любят, но она тоже очень нужна. Грусть похожа на тихий, спокойный дождик. Она приходит, когда мы что-то теряем, с кем-то прощаемся или когда что-то не получается. Она говорит: \xabЭй, остановись, мне сейчас немножко больно, мне нужно побыть одному/одной\xbb."]
							}), (0, l.jsx)("p", {
								children: "Когда приходит? Когда заканчиваются каникулы, когда ломается любимая игрушка или когда ты скучаешь по кому-то."
							})]
						}), (0, l.jsxs)("section", {
							className: c().card,
							children: [(0, l.jsx)("h5", {
								children: "3. ЗЛОСТЬ"
							}), (0, l.jsxs)("p", {
								children: [(0, l.jsx)("strong", {
									children: "ДЫМОК:"
								}), " Ой-ой-ой! Эта эмоция — как маленький огненный шарик в животе! Она может быть очень горячей. Злость приходит, когда мы чувствуем, что с нами поступили несправедливо, когда что-то идёт не по нашему плану. Она кричит: \xabВнимание! Мне это не нравится!\xbb"]
							}), (0, l.jsx)("p", {
								children: "Важное правило: Чувствовать злость — можно и нормально. А вот драться, обзываться и ломать вещи из-за неё — нельзя. Мы с тобой научимся выпускать этот \xabогненный шарик\xbb безопасно, чтобы никому не было больно."
							})]
						}), (0, l.jsxs)("section", {
							className: c().card,
							children: [(0, l.jsx)("h5", {
								children: "4. СТРАХ"
							}), (0, l.jsxs)("p", {
								children: [(0, l.jsx)("strong", {
									children: "ДЫМОК:"
								}), " Эта эмоция — как страж у ворот. Она хочет нас защитить от опасности! Когда мы боимся, наше тело замирает, сердце стучит быстрее, чтобы мы могли убежать. Страх говорит: \xabОсторожно! Проверь, всё ли в порядке?\xbb"]
							}), (0, l.jsx)("p", {
								children: "Когда приходит? Когда в комнате темно, когда нужно выступать перед классом или когда видишь большую собаку."
							})]
						})]
					})
				}, {
					id: "expression",
					title: "Как же мы выражаем эмоции?",
					jsx: (0, l.jsxs)("div", {
						children: [(0, l.jsx)("p", {
							children: "Наши эмоции — они же живые! Им хочется наружу. Они проявляются на нашем лице, в нашем теле и в наших жестах."
						}), (0, l.jsxs)("ul", {
							children: [(0, l.jsxs)("li", {
								children: [(0, l.jsx)("strong", {
									children: "Радость:"
								}), " Широкая улыбка, смех, блестящие глаза, хочется обниматься и танцевать!"]
							}), (0, l.jsxs)("li", {
								children: [(0, l.jsx)("strong", {
									children: "Грусть:"
								}), " Уголки губ опущены, из глаз катятся слезы, плечики опущены, хочется свернуться калачиком."]
							}), (0, l.jsxs)("li", {
								children: [(0, l.jsx)("strong", {
									children: "Злость:"
								}), " Брови нахмурены, губы сжаты, кулачки сжаты, тело напряжено, как пружинка."]
							}), (0, l.jsxs)("li", {
								children: [(0, l.jsx)("strong", {
									children: "Страх:"
								}), " Глаза широко раскрыты, брови приподняты, рот приоткрыт, хочется отпрянуть назад или спрятаться."]
							})]
						}), (0, l.jsx)("p", {
							children: "Видишь, какая это интересная наука? И знаешь что? Все эмоции важны и нужны. Нет плохих или хороших эмоций. Есть те, которые приятно чувствовать, и те, которые чувствовать неприятно. Но все они — наши верные друзья и помощники, если мы умеем их понимать!"
						}), (0, l.jsx)("p", {
							className: c().exerciseIntro,
							children: (0, l.jsx)("strong", {
								children: "А теперь давай поиграем и закрепим наши знания! Я приготовил для тебя несколько веселых упражнений!"
							})
						})]
					})
				}, {
					id: "orchestra",
					title: "Упражнение 1: \xabЭмоциональный оркестр\xbb",
					jsx: (0, l.jsx)(o, {})
				}, {
					id: "guess",
					title: "Упражнение 2: \xabУгадай, что почувствовал дракончик?\xbb",
					jsx: (0, l.jsx)(x, {
						onComplete: () => i(!0)
					})
				}, {
					id: "reflection",
					title: "Рефлексия занятия №1",
					jsx: (0, l.jsxs)("div", {
						children: [(0, l.jsx)("p", {
							children: "ДЫМОК: Вот и подходит к концу наша первая встреча! Правда, было здорово? Мы с тобой сегодня были настоящими исследователями: мы открыли целый мир эмоций, который живет внутри каждого из нас!"
						}), (0, l.jsx)("h5", {
							children: "Давай вспомним, что же мы узнали:"
						}), (0, l.jsxs)("ul", {
							children: [(0, l.jsx)("li", {
								children: "Мы поняли, что эмоции — это как погода внутри нас. Солнышко радости, тучки грусти, гроза злости и холодок страха."
							}), (0, l.jsx)("li", {
								children: "Мы узнали четыре главные эмоции: Радость, Грусть, Злость и Страх."
							}), (0, l.jsx)("li", {
								children: "Мы поиграли в \xabЭмоциональный оркестр\xbb и почувствовали, как эмоции живут в нашем теле."
							}), (0, l.jsx)("li", {
								children: "А еще мы поняли, что у каждой эмоции есть своя причина."
							})]
						}), (0, l.jsx)("p", {
							children: "Ты был таким внимательным и активным сегодня! Ты — супер-исследователь! Помни самое главное правило: не бывает плохих или хороших эмоций. Все они — наши важные и нужные друзья-помощники."
						}), (0, l.jsx)("h5", {
							children: "Вопросы для рефлексии (обсуждения)"
						}), (0, l.jsxs)("ol", {
							children: [(0, l.jsx)("li", {
								children: "Какое упражнение тебе понравилось больше всего? \xabЭмоциональный оркестр\xbb или \xabУгадай, что почувствовал дракончик\xbb?"
							}), (0, l.jsx)("li", {
								children: "Какая из четырех эмоций кажется тебе самой понятной?"
							}), (0, l.jsx)("li", {
								children: "Вспомни, какую эмоцию ты чувствовал(а) сегодня, до нашего занятия?"
							}), (0, l.jsx)("li", {
								children: "Когда в последний раз ты чувствовал(а) сильную радость? Что ее вызвало?"
							}), (0, l.jsx)("li", {
								children: "Как ты думаешь, зачем людям вообще нужны эмоции?"
							})]
						})]
					})
				}, {
					id: "end",
					title: "Конец 1-го занятия",
					jsx: (0, l.jsx)("div", {
						children: (0, l.jsxs)("div", {
							className: c().heroSmall,
							children: [(0, l.jsx)("img", {
								src: "./images/dragon/hello.png",
								alt: "Дымок машет на прощание"
							}), (0, l.jsxs)("p", {
								children: [(0, l.jsx)("strong", {
									children: "ДЫМОК:"
								}), " Спасибо тебе за компанию! Было невероятно здорово познакомиться с тобой. Мы с тобой — отличная команда! До скорой встречи в нашем удивительном мире эмоций! Твой друг, Дымок"]
							})]
						})
					})
				}];
				(0, r.useEffect)(() => {
					a[e].id
				}, [e]);
				let h = "guess" === a[e].id && !n;
				return(0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsx)(d.A, {}), (0, l.jsx)("section", {
						className: c().program,
						children: (0, l.jsxs)("div", {
							className: t()(c().programContainer, "container"),
							children: [(0, l.jsxs)("header", {
								className: c().header,
								children: [(0, l.jsx)("h2", {
									children: a[e].title
								}), (0, l.jsxs)("div", {
									className: c().progress,
									children: ["Слайд ", e + 1, " / ", a.length]
								})]
							}), (0, l.jsx)("main", {
								className: c().content,
								children: (0, l.jsx)("div", {
									className: c().slide,
									children: a[e].jsx
								})
							}), (0, l.jsxs)("footer", {
								className: c().controls,
								children: [(0, l.jsx)("button", {
									className: t()(c().button, c().prev),
									onClick: () => s(e => Math.max(0, e - 1)),
									"aria-label": "Назад",
									children: "Назад"
								}), (0, l.jsx)("button", {
									className: t()(c().button, c().next, h && c().disabled),
									onClick: () => {
										("guess" !== a[e].id || n) && s(e => Math.min(e + 1, a.length - 1))
									},
									"aria-label": "Далее",
									disabled: h,
									children: "Далее"
								})]
							})]
						})
					})]
				})
			}

			function o() {
				let e = ["./images/dragon/happy.png", "./images/dragon/sad.png", "./images/dragon/anger.png", "./images/dragon/fear.png"],
					s = ["Радость", "Грусть", "Злость", "Страх"],
					[n, i] = (0, r.useState)(0),
					[t, a] = (0, r.useState)(new Set([0])),
					[d, h] = (0, r.useState)(!1);
				return(0, l.jsxs)("div", {
					className: c().exercise,
					children: [(0, l.jsx)("h4", {
						children: "Упражнение \xabЭмоциональный оркестр\xbb"
					}), (0, l.jsx)("p", {
						children: "Инструкция: Нажми на картинку, чтобы показать следующую эмоцию. Изобрази звук и движение этой эмоции!"
					}), (0, l.jsxs)("div", {
						className: c().orchestraCard,
						children: [(0, l.jsx)("img", {
							src: e[n],
							alt: "Дымок — ".concat(s[n]),
							className: c().orchestraImg,
							onClick: function() {
								d || i(s => {
									let n = (s + 1) % e.length;
									return a(s => {
										let l = new Set(s);
										return l.add(n), l.size === e.length && h(!0), l
									}), n
								})
							}
						}), (0, l.jsx)("div", {
							className: c().orchestraLabel,
							children: s[n]
						}), (0, l.jsx)("div", {
							className: c().hint,
							children: "Нажми на картинку, чтобы сменить эмоцию"
						}), d && (0, l.jsxs)("div", {
							className: c().completedMessage,
							role: "status",
							children: ["Упражнение выполнено! ", (0, l.jsx)("button", {
								className: c().linkLike,
								onClick: function() {
									i(0), a(new Set([0])), h(!1)
								},
								children: "Нажми сюда, если хочешь попробовать еще раз"
							})]
						})]
					}), (0, l.jsxs)("div", {
						className: c().roleCard,
						children: [(0, l.jsx)("h5", {
							children: "Роль взрослого"
						}), (0, l.jsxs)("p", {
							children: [(0, l.jsx)("strong", {
								children: "Психолог:"
							}), " Показывает пример, подбадривает, вовлекает."]
						}), (0, l.jsxs)("p", {
							children: [(0, l.jsx)("strong", {
								children: "Родитель:"
							}), " Выполняет упражнение вместе с ребёнком — это важно для раскрепощения."]
						})]
					})]
				})
			}

			function x(e) {
				let {
					onComplete: s
				} = e, n = [{
					img: "./images/dragon/scene1.png",
					correct: "Радость",
					text: "Дымок встретил лучшего друга"
				}, {
					img: "./images/dragon/scene2.png",
					correct: "Грусть",
					text: "У Дымка сломалась любимая игрушка"
				}, {
					img: "./images/dragon/scene3.png",
					correct: "Злость",
					text: "Кто-то взял вещь Дымка без спроса"
				}, {
					img: "./images/dragon/scene4.png",
					correct: "Страх",
					text: "Дымок оказался в темной комнате"
				}], [i, a] = (0, r.useState)(0), [d, h] = (0, r.useState)(null), [o, x] = (0, r.useState)(!1);
				return(0, l.jsxs)("div", {
					className: c().exercise,
					children: [(0, l.jsx)("h4", {
						children: "Упражнение \xabУгадай, что почувствовал дракончик?\xbb"
					}), (0, l.jsxs)("div", {
						className: c().situationCard,
						children: [(0, l.jsx)("img", {
							src: n[i].img,
							alt: n[i].text,
							className: c().situationImg
						}), (0, l.jsx)("p", {
							className: c().situationText,
							children: n[i].text
						}), (0, l.jsx)("div", {
							className: c().emotionIcons,
							children: ["Радость", "Грусть", "Злость", "Страх"].map(e => (0, l.jsx)("button", {
								className: c().emotionBtn,
								onClick: () => (function(e) {
									let l = n[i].correct;
									e === l ? (h({
										ok: !0,
										text: "Абсолютно верно! Я действительно ".concat(l.toLowerCase(), ". Ты отлично справляешься!")
									}), setTimeout(() => {
										i < n.length - 1 ? (a(e => e + 1), h(null)) : (x(!0), h(null), "function" == typeof s && s())
									}, 700)) : h({
										ok: !1,
										text: "Хм, интересная мысль! Но мне кажется, что здесь я испытал другую эмоцию. Давай попробуем ещё?"
									})
								})(e),
								"aria-disabled": o,
								children: e
							}, e))
						}), (0, l.jsx)("div", {
							className: t()(c().feedback, (null == d ? void 0 : d.ok) ? c().ok : c().fail),
							children: d ? d.text : o ? "Упражнение выполнено! Можешь идти дальше!" : "Выбери эмоцию — Дымок подскажет, правильно ли ты угадал!"
						}), (0, l.jsxs)("div", {
							className: c().roleCard,
							children: [(0, l.jsx)("h5", {
								children: "Роль взрослого"
							}), (0, l.jsxs)("p", {
								children: [(0, l.jsx)("strong", {
									children: "Психолог:"
								}), " Обсуждает выбор с группой, задаёт вопросы."]
							}), (0, l.jsxs)("p", {
								children: [(0, l.jsx)("strong", {
									children: "Родитель:"
								}), " Обсуждает ситуацию и связывает её с личным опытом ребёнка."]
							})]
						})]
					})]
				})
			}
		},
		9475: (e, s, n) => {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/program", function() {
				return n(6310)
			}])
		}
	},
	e => {
		e.O(0, [576, 636, 593, 792], () => e(e.s = 9475)), _N_E = e.O()
	}
]);