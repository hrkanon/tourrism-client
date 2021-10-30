(this["webpackJsonpassignment-11"] =
  this["webpackJsonpassignment-11"] || []).push([
  [0],
  {
    111: function (e, t, c) {},
    112: function (e, t, c) {},
    113: function (e, t, c) {},
    118: function (e, t, c) {},
    119: function (e, t, c) {},
    120: function (e, t, c) {},
    121: function (e, t, c) {},
    122: function (e, t, c) {},
    123: function (e, t, c) {},
    124: function (e, t, c) {},
    125: function (e, t, c) {},
    128: function (e, t, c) {},
    129: function (e, t, c) {
      "use strict";
      c.r(t);
      var s = c(1),
        n = c.n(s),
        a = c(35),
        i = c.n(a),
        r = (c(90), c(19)),
        j = c(17),
        l = c(9),
        d = c(79),
        o = {
          apiKey: "AIzaSyDFJd2kox4qqjQP7CCKhmSJt7KWNtaA3XI",
          authDomain: "tourism-88f41.firebaseapp.com",
          projectId: "tourism-88f41",
          storageBucket: "tourism-88f41.appspot.com",
          messagingSenderId: "79481356234",
          appId: "1:79481356234:web:02cd7bcd571f799435d933",
        },
        b = function () {
          Object(d.a)(o);
        },
        h = c(40);
      b();
      var x = function () {
          var e = Object(s.useState)({}),
            t = Object(l.a)(e, 2),
            c = t[0],
            n = t[1],
            a = Object(s.useState)(""),
            i = Object(l.a)(a, 2),
            r = i[0],
            j = i[1],
            d = Object(s.useState)(!0),
            o = Object(l.a)(d, 2),
            b = o[0],
            x = o[1],
            O = Object(h.c)(),
            m = new h.a();
          Object(s.useEffect)(function () {
            var e = Object(h.d)(O, function (e) {
              n(e || {}), x(!1);
            });
            return function () {
              return e;
            };
          }, []);
          return {
            user: c,
            isLoading: b,
            error: r,
            handleGoogleSignIn: function () {
              return Object(h.f)(O, m);
            },
            signUpWithEmailPassword: function (e, t, c) {
              Object(h.b)(O, t, c)
                .then(function (t) {
                  n(t.user),
                    j(""),
                    Object(h.h)(O.currentUser, { displayName: e }),
                    window.location.reload();
                })
                .catch(function (e) {
                  j(e.message);
                });
            },
            signInUsingEmailPassword: function (e, t) {
              return Object(h.e)(O, e, t);
            },
            handleSignOut: function () {
              x(!0),
                Object(h.g)(O).then(function () {
                  n({});
                });
            },
          };
        },
        O = c(0),
        m = Object(s.createContext)(),
        u = function (e) {
          var t = e.children,
            c = x();
          return Object(O.jsx)(m.Provider, { value: c, children: t });
        },
        p = c(6),
        f = c(80),
        g = c.n(f),
        N = c(81),
        v =
          (c(111),
          function () {
            var e = Object(N.a)(),
              t = e.register,
              c = e.handleSubmit,
              s = e.reset;
            return Object(O.jsx)("div", {
              className: "mt-4 add-des-sec",
              children: Object(O.jsxs)("div", {
                className: "add-destination",
                children: [
                  Object(O.jsx)("h2", {
                    className: "text-center",
                    children: "Add a Destination",
                  }),
                  Object(O.jsxs)("form", {
                    onSubmit: c(function (e) {
                      console.log(e),
                        g.a
                          .post(
                            "https://floating-plains-91880.herokuapp.com/destinations",
                            e
                          )
                          .then(function (e) {
                            e.data.insertedId &&
                              (alert("Added Successfully"), s());
                          });
                    }),
                    children: [
                      Object(O.jsx)(
                        "input",
                        Object(p.a)(
                          Object(p.a)(
                            {},
                            t("name", { required: !0, maxLength: 20 })
                          ),
                          {},
                          { placeholder: "Name" }
                        )
                      ),
                      Object(O.jsx)(
                        "textarea",
                        Object(p.a)(
                          Object(p.a)({}, t("description")),
                          {},
                          { placeholder: "Description" }
                        )
                      ),
                      Object(O.jsx)(
                        "input",
                        Object(p.a)(
                          Object(p.a)({ type: "number" }, t("days")),
                          {},
                          { placeholder: "Days" }
                        )
                      ),
                      Object(O.jsx)(
                        "input",
                        Object(p.a)(
                          Object(p.a)({ type: "number" }, t("price")),
                          {},
                          { placeholder: "Price" }
                        )
                      ),
                      Object(O.jsx)(
                        "input",
                        Object(p.a)(
                          Object(p.a)({}, t("img")),
                          {},
                          { placeholder: "image url" }
                        )
                      ),
                      Object(O.jsx)("input", { type: "submit" }),
                    ],
                  }),
                ],
              }),
            });
          }),
        y = function () {
          return Object(s.useContext)(m);
        },
        w =
          (c(112),
          function () {
            var e = Object(s.useState)([]),
              t = Object(l.a)(e, 2),
              c = t[0],
              n = t[1],
              a = Object(s.useState)(null),
              i = Object(l.a)(a, 2),
              r = i[0],
              j = i[1],
              d = y().user.email;
            Object(s.useEffect)(
              function () {
                fetch(
                  "https://floating-plains-91880.herokuapp.com/myOrders/".concat(
                    d
                  )
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return n(e);
                  });
              },
              [r]
            );
            return Object(O.jsxs)("div", {
              children: [
                Object(O.jsxs)("h2", {
                  className: "text-center",
                  children: [
                    "My Orders: ",
                    null === c || void 0 === c ? void 0 : c.length,
                  ],
                }),
                Object(O.jsx)("div", {
                  className: "container",
                  children: Object(O.jsx)("div", {
                    className: "row g-3 mt-4",
                    children: c.map(function (e) {
                      return Object(O.jsx)(
                        "div",
                        {
                          className: "col-md-4",
                          children: Object(O.jsxs)("div", {
                            className: "card m-2 p-3",
                            children: [
                              Object(O.jsx)("div", {
                                className: " text-center",
                                children: Object(O.jsx)("img", {
                                  className: "img-fluid card-img rounded",
                                  src: e.img,
                                  alt: "",
                                }),
                              }),
                              Object(O.jsxs)("div", {
                                className: "meal-info text-center",
                                children: [
                                  Object(O.jsx)("h4", { children: e.name }),
                                  Object(O.jsx)("p", {
                                    children: e.description,
                                  }),
                                  Object(O.jsxs)("p", {
                                    children: [e.days, " Days"],
                                  }),
                                ],
                              }),
                              Object(O.jsx)("hr", {}),
                              Object(O.jsxs)("h3", {
                                className: "price fw-bold",
                                children: ["$", e.price],
                              }),
                              Object(O.jsxs)("small", {
                                className: "pending",
                                children: [
                                  " ",
                                  "Status:",
                                  Object(O.jsx)("span", {
                                    className: "text-danger ps-1",
                                    children: e.status,
                                  }),
                                ],
                              }),
                              Object(O.jsx)("button", {
                                className: "delete-button",
                                onClick: function () {
                                  return (
                                    (t = e._id),
                                    console.log(t),
                                    void fetch(
                                      "https://floating-plains-91880.herokuapp.com/deleteProduct/".concat(
                                        t
                                      ),
                                      {
                                        method: "DELETE",
                                        headers: {
                                          "content-type": "application/json",
                                        },
                                      }
                                    )
                                      .then(function (e) {
                                        return e.json();
                                      })
                                      .then(function (e) {
                                        e.deleteCount ? j(!0) : j(!1);
                                      })
                                  );
                                  var t;
                                },
                                children: "X",
                              }),
                              Object(O.jsx)("div", {
                                className: "details",
                                children: Object(O.jsxs)("button", {
                                  className: " btn btn-warning",
                                  children: [
                                    Object(O.jsx)("i", {
                                      class: "fas pe-2 fa-myOrder-arrow-down",
                                    }),
                                    "Buy Now",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        },
                        e._id
                      );
                    }),
                  }),
                }),
              ],
            });
          }),
        k =
          (c(113),
          function () {
            var e = Object(s.useState)([]),
              t = Object(l.a)(e, 2),
              c = t[0],
              n = t[1];
            return (
              Object(s.useEffect)(function () {
                fetch(
                  "https://floating-plains-91880.herokuapp.com/destinations"
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return n(e);
                  });
              }, []),
              Object(O.jsx)("div", {
                id: "destinations",
                children: Object(O.jsxs)("div", {
                  className: "container mt-5",
                  children: [
                    Object(O.jsxs)("div", {
                      children: [
                        Object(O.jsx)("h3", {
                          className: "text-center mt-5",
                          children: "GREAT PLACES TO VISIT",
                        }),
                        Object(O.jsxs)("h1", {
                          className: "text-center service-heading ",
                          children: [
                            "Search ",
                            Object(O.jsx)("span", {
                              className: "text-warning",
                              children: "and Enjoy",
                            }),
                          ],
                        }),
                        Object(O.jsx)("div", {
                          className: "underline-div mx-auto",
                        }),
                      ],
                    }),
                    Object(O.jsx)("div", {
                      className: "row g-3 mt-4",
                      children: c.map(function (e) {
                        return Object(O.jsx)(
                          "div",
                          {
                            className: "col-md-4",
                            children: Object(O.jsxs)("div", {
                              className: "card m-2 p-3",
                              children: [
                                Object(O.jsx)("div", {
                                  className: " text-center",
                                  children: Object(O.jsx)("img", {
                                    className: "img-fluid card-img rounded",
                                    src: e.img,
                                    alt: "",
                                  }),
                                }),
                                Object(O.jsxs)("div", {
                                  className: "meal-info text-center",
                                  children: [
                                    Object(O.jsx)("h4", { children: e.name }),
                                    Object(O.jsx)("p", {
                                      children: e.description,
                                    }),
                                    Object(O.jsxs)("p", {
                                      children: [e.days, " Days"],
                                    }),
                                  ],
                                }),
                                Object(O.jsx)("hr", {}),
                                Object(O.jsxs)("h3", {
                                  className: "price fw-bold",
                                  children: ["$", e.price],
                                }),
                                Object(O.jsx)("div", {
                                  className: "details",
                                  children: Object(O.jsx)(r.b, {
                                    to: "/destination/".concat(e._id),
                                    children: Object(O.jsx)("button", {
                                      className: " btn btn-danger",
                                      children: "Book Now",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          },
                          e._id
                        );
                      }),
                    }),
                    Object(O.jsx)("div", {
                      className: "my-5 text-center",
                      children: Object(O.jsx)(r.b, {
                        to: "/addDestination",
                        children: Object(O.jsx)("button", {
                          className: "btn btn-primary px-5 py-2",
                          children: "Add Tours",
                        }),
                      }),
                    }),
                  ],
                }),
              })
            );
          }),
        S = (c(118), c.p + "static/media/new-york.846d7f25.jpeg"),
        I = c.p + "static/media/london.6ea321ac.jpeg",
        C = c.p + "static/media/paris.bdab3f37.jpeg",
        E = c(135),
        T = function () {
          return Object(O.jsxs)(E.a, {
            children: [
              Object(O.jsxs)(E.a.Item, {
                interval: 3e3,
                children: [
                  Object(O.jsx)("img", {
                    className: " banner-img d-block w-100 ",
                    src: S,
                    alt: "First slide",
                  }),
                  Object(O.jsx)("div", {
                    className: "banner-head text-white ",
                    children: Object(O.jsxs)("h1", {
                      className: "banner-heading",
                      children: [
                        "We Create ",
                        Object(O.jsx)("span", {
                          className: "text-warning",
                          children: "Experiences",
                        }),
                      ],
                    }),
                  }),
                  Object(O.jsxs)(E.a.Caption, {
                    children: [
                      Object(O.jsx)("h4", { children: "UNITED STATES" }),
                      Object(O.jsx)("h1", {
                        children: "Irresistible New York",
                      }),
                    ],
                  }),
                ],
              }),
              Object(O.jsxs)(E.a.Item, {
                interval: 3e3,
                children: [
                  Object(O.jsx)("img", {
                    className: "d-block w-100 banner-img",
                    src: I,
                    alt: "First slide",
                  }),
                  Object(O.jsx)("div", {
                    className: "banner-head text-white",
                    children: Object(O.jsxs)("h1", {
                      className: "banner-heading ",
                      children: [
                        "We Create ",
                        Object(O.jsx)("span", {
                          className: "text-warning",
                          children: "Experiences",
                        }),
                      ],
                    }),
                  }),
                  Object(O.jsxs)(E.a.Caption, {
                    children: [
                      Object(O.jsx)("h4", { children: "UNITED Kingdom" }),
                      Object(O.jsx)("h1", { children: "Theatrical London" }),
                    ],
                  }),
                ],
              }),
              Object(O.jsxs)(E.a.Item, {
                interval: 3e3,
                children: [
                  Object(O.jsx)("img", {
                    className: "d-block w-100 banner-img",
                    src: C,
                    alt: "First slide",
                  }),
                  Object(O.jsx)("div", {
                    className: "banner-head text-white",
                    children: Object(O.jsxs)("h1", {
                      className: "banner-heading ",
                      children: [
                        "We Create ",
                        Object(O.jsx)("span", {
                          className: "text-warning",
                          children: "Experiences",
                        }),
                      ],
                    }),
                  }),
                  Object(O.jsxs)(E.a.Caption, {
                    children: [
                      Object(O.jsx)("h4", { children: "France" }),
                      Object(O.jsx)("h1", { children: "Magnificent Paris" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        A =
          (c(119),
          function () {
            return Object(O.jsx)("div", {
              className: "subscribe-sec",
              children: Object(O.jsx)("div", {
                className: "container subscribe",
                children: Object(O.jsxs)("div", {
                  className: "ms-4",
                  children: [
                    Object(O.jsx)("h4", {
                      children: "IT'S TIME FOR DISCOUNTS",
                    }),
                    Object(O.jsxs)("h1", {
                      className: "mt-4 ",
                      children: [
                        "Subscribe ",
                        Object(O.jsx)("span", {
                          className: "text-danger",
                          children: "& travel!",
                        }),
                      ],
                    }),
                    Object(O.jsx)("p", {
                      className: "fw-bold",
                      children:
                        "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence.",
                    }),
                    Object(O.jsxs)("div", {
                      className: "  mt-5",
                      children: [
                        Object(O.jsx)("input", {
                          className: " p-3 w-50",
                          type: "email",
                          name: "",
                          id: "",
                          placeholder: "Enter your Email Address",
                        }),
                        Object(O.jsx)("button", {
                          className: "p-3 ms-2 rounded",
                          children: "Subscribe",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          }),
        L = (c(120), c.p + "static/media/organizer1.7431ac65.jpeg"),
        P = c.p + "static/media/organizer2.fa83f17a.jpeg",
        R = c.p + "static/media/organizer3.1d4ea6c0.jpeg",
        D = c.p + "static/media/organizer4.ca225cc6.jpeg",
        z = function () {
          return Object(O.jsxs)("div", {
            className: "mb-5",
            children: [
              Object(O.jsx)("h2", {
                className: "text-center",
                children: "MEET OUR TRIP ORGANIZER",
              }),
              Object(O.jsxs)("div", {
                className: " d-flex justify-content-center align-items-center",
                children: [
                  Object(O.jsx)("div", { className: "review-line" }),
                  Object(O.jsx)("div", {
                    className: "mx-2",
                    children: Object(O.jsx)("i", {
                      class: "fas globe fa-globe-americas",
                    }),
                  }),
                  Object(O.jsx)("div", { className: "review-line" }),
                ],
              }),
              Object(O.jsx)("p", {
                className: "text-center",
                children:
                  "We have the best team in the whole world that organizes the best trips for our clients and make their journeys life remembering.",
              }),
              Object(O.jsx)("div", {
                className: "container",
                children: Object(O.jsxs)("div", {
                  className: "row g-3 mt-3",
                  children: [
                    Object(O.jsx)("div", {
                      className: "col-md-6",
                      children: Object(O.jsxs)("div", {
                        className: "d-flex align-items-center organizer p-2",
                        children: [
                          Object(O.jsx)("div", {
                            children: Object(O.jsx)("img", {
                              className: "organizer-img",
                              src: L,
                              alt: "",
                            }),
                          }),
                          Object(O.jsxs)("div", {
                            className: "ms-2",
                            children: [
                              Object(O.jsx)("h2", { children: "Joe Root" }),
                              Object(O.jsx)("h4", { children: "Tour Agent" }),
                              Object(O.jsx)("p", {
                                children:
                                  "Joe Root is a friendly, and very helpful agent of our team. You can get the good guidence of your tour plan.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(O.jsx)("div", {
                      className: "col-md-6",
                      children: Object(O.jsxs)("div", {
                        className: "d-flex align-items-center organizer p-2",
                        children: [
                          Object(O.jsx)("div", {
                            children: Object(O.jsx)("img", {
                              className: "organizer-img",
                              src: R,
                              alt: "",
                            }),
                          }),
                          Object(O.jsxs)("div", {
                            className: "ms-2",
                            children: [
                              Object(O.jsx)("h2", { children: "Ramsay" }),
                              Object(O.jsx)("h4", { children: "Trip Adviser" }),
                              Object(O.jsx)("p", {
                                children:
                                  "Ramsay will assess and give you the best trip plan especially for your case.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(O.jsx)("div", {
                      className: "col-md-6",
                      children: Object(O.jsxs)("div", {
                        className: "d-flex align-items-center organizer p-2",
                        children: [
                          Object(O.jsx)("div", {
                            children: Object(O.jsx)("img", {
                              className: "organizer-img",
                              src: D,
                              alt: "",
                            }),
                          }),
                          Object(O.jsxs)("div", {
                            className: "ms-2",
                            children: [
                              Object(O.jsx)("h2", { children: "Nichole" }),
                              Object(O.jsx)("h4", { children: "Tour Manager" }),
                              Object(O.jsx)("p", {
                                children:
                                  "Nichole is always be there if you required anything to make your tour worthy.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(O.jsx)("div", {
                      className: "col-md-6",
                      children: Object(O.jsxs)("div", {
                        className: "d-flex align-items-center organizer p-2",
                        children: [
                          Object(O.jsx)("div", {
                            children: Object(O.jsx)("img", {
                              className: "organizer-img",
                              src: P,
                              alt: "",
                            }),
                          }),
                          Object(O.jsxs)("div", {
                            className: "ms-2",
                            children: [
                              Object(O.jsx)("h2", { children: "Roy Stone" }),
                              Object(O.jsx)("h4", {
                                children: "Service Manager",
                              }),
                              Object(O.jsx)("p", {
                                children:
                                  "Roy Stone the service manager of our team. You can get all kind of service of your tour.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        B = function () {
          return Object(O.jsxs)("div", {
            children: [
              Object(O.jsx)(T, {}),
              Object(O.jsx)(k, {}),
              Object(O.jsx)(z, {}),
              Object(O.jsx)(A, {}),
            ],
          });
        },
        F =
          (c(121),
          function () {
            var e,
              t = y(),
              c = t.handleGoogleSignIn,
              n = t.signInUsingEmailPassword,
              a = Object(s.useState)(""),
              i = Object(l.a)(a, 2),
              d = i[0],
              o = i[1],
              b = Object(s.useState)(""),
              h = Object(l.a)(b, 2),
              x = h[0],
              m = h[1],
              u = Object(s.useState)(""),
              p = Object(l.a)(u, 2),
              f = p[0],
              g = p[1],
              N = Object(j.g)(),
              v =
                (null === (e = Object(j.h)().state) || void 0 === e
                  ? void 0
                  : e.from) || "/home";
            return Object(O.jsxs)("div", {
              className: "container login-form py-3 mt-5",
              children: [
                Object(O.jsx)("h2", {
                  className: "text-center py-3",
                  children: "Please Login",
                }),
                Object(O.jsxs)("div", {
                  className: "form d-flex flex-column align-items-center",
                  children: [
                    Object(O.jsx)("input", {
                      onBlur: function (e) {
                        o(e.target.value);
                      },
                      type: "email",
                      placeholder: "your email",
                    }),
                    Object(O.jsx)("br", {}),
                    Object(O.jsx)("input", {
                      onBlur: function (e) {
                        m(e.target.value);
                      },
                      type: "password",
                      placeholder: "password",
                    }),
                  ],
                }),
                Object(O.jsx)("small", {
                  className: "text-danger ps-4 ms-1",
                  children: f,
                }),
                Object(O.jsx)("br", {}),
                Object(O.jsxs)("p", {
                  className: "mt-3 text-center",
                  children: [
                    "New in MedService?",
                    Object(O.jsx)(r.b, {
                      className: "text-danger ps-2",
                      to: "/register",
                      children: "click here to register",
                    }),
                  ],
                }),
                Object(O.jsx)("button", {
                  className: "btn btn-warning w-100",
                  onClick: function () {
                    return (function (e, t) {
                      n(e, t)
                        .then(function (e) {
                          N.push(v);
                        })
                        .catch(function (e) {
                          g(e.message);
                        });
                    })(d, x);
                  },
                  children: "Login",
                }),
                Object(O.jsx)("p", {
                  className: "fw-bold mt-2 text-center",
                  children: "Or",
                }),
                Object(O.jsx)("button", {
                  className: "w-100 btn btn-warning",
                  onClick: function () {
                    c().then(function (e) {
                      N.push(v);
                    });
                  },
                  children: "Login with Google",
                }),
              ],
            });
          }),
        M =
          (c(122),
          function () {
            return Object(O.jsxs)("div", {
              children: [
                Object(O.jsx)("h2", { children: "404" }),
                Object(O.jsx)("h3", {
                  className: "text-danger",
                  children: " Page Not Found!!",
                }),
              ],
            });
          }),
        q =
          (c(78),
          function () {
            var e = Object(s.useState)(""),
              t = Object(l.a)(e, 2),
              c = (t[0], t[1]),
              n = Object(s.useState)(""),
              a = Object(l.a)(n, 2),
              i = (a[0], a[1]),
              j = Object(s.useState)(""),
              d = Object(l.a)(j, 2),
              o = (d[0], d[1]);
            return Object(O.jsxs)("div", {
              className: "container login-form py-3 mt-5",
              children: [
                Object(O.jsx)("h2", {
                  className: "text-center py-3",
                  children: "Please Register",
                }),
                Object(O.jsxs)("div", {
                  className: "form d-flex flex-column align-items-center",
                  children: [
                    Object(O.jsx)("input", {
                      onBlur: function (e) {
                        c(e.target.value);
                      },
                      type: "text",
                      placeholder: "Your Name",
                      required: !0,
                    }),
                    Object(O.jsx)("br", {}),
                    Object(O.jsx)("input", {
                      onBlur: function (e) {
                        i(e.target.value);
                      },
                      type: "email",
                      placeholder: "your email",
                      required: !0,
                    }),
                    Object(O.jsx)("br", {}),
                    Object(O.jsx)("input", {
                      onBlur: function (e) {
                        o(e.target.value);
                      },
                      type: "password",
                      placeholder: "password",
                      required: !0,
                    }),
                    Object(O.jsx)("small", { className: "text-danger ps-4" }),
                    Object(O.jsx)("br", {}),
                    Object(O.jsxs)("p", {
                      children: [
                        "Already have an Account?",
                        Object(O.jsx)(r.b, {
                          className: "text-danger ps-2 ",
                          to: "/login",
                          children: "click here to login",
                        }),
                      ],
                    }),
                    Object(O.jsx)("button", {
                      className: "btn btn-warning w-100",
                      onClick: function () {},
                      children: "Register",
                    }),
                  ],
                }),
              ],
            });
          }),
        U =
          (c(123),
          function () {
            var e = Object(s.useState)({}),
              t = Object(l.a)(e, 2),
              c = t[0],
              n = t[1],
              a = Object(j.i)().destinationId,
              i = y().user;
            Object(s.useEffect)(function () {
              fetch(
                "https://floating-plains-91880.herokuapp.com/destination/".concat(
                  a
                )
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return n(e);
                });
            }, []);
            return Object(O.jsx)("div", {
              className: "container",
              children: Object(O.jsxs)("div", {
                className: "row",
                children: [
                  Object(O.jsxs)("div", {
                    className: "col-md-6 p-3",
                    children: [
                      Object(O.jsxs)("div", {
                        className:
                          "d-flex flex-column justify-content-center align-items-center",
                        children: [
                          Object(O.jsx)("h1", { children: c.name }),
                          Object(O.jsx)("h4", { children: c.description }),
                          Object(O.jsxs)("h3", {
                            className: "text-warning",
                            children: ["$", c.price],
                          }),
                          Object(O.jsxs)("p", {
                            children: [c.days, " days tour"],
                          }),
                        ],
                      }),
                      Object(O.jsx)("div", {
                        className: "text-center",
                        children: Object(O.jsx)("button", {
                          onClick: function () {
                            var e = c;
                            (e.email = i.email),
                              (e.status = "pending"),
                              fetch(
                                "https://floating-plains-91880.herokuapp.com/addOrder",
                                {
                                  method: "POST",
                                  headers: {
                                    "content-type": "application/json",
                                  },
                                  body: JSON.stringify(e),
                                }
                              )
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  e.insertedId &&
                                    alert("Added to your myOrder");
                                });
                          },
                          className: "btn btn-primary",
                          children: "Book Now",
                        }),
                      }),
                    ],
                  }),
                  Object(O.jsx)("div", {
                    className: "col-md-6",
                    children: Object(O.jsx)("img", {
                      className: "img-fluid",
                      src: c.img,
                      alt: "",
                    }),
                  }),
                ],
              }),
            });
          }),
        W = (c(124), c.p + "static/media/logo.7f6b9b5c.png"),
        G = function () {
          return Object(O.jsx)("div", {
            className: " mt-5 footer-sec text-white w-100",
            children: Object(O.jsxs)("div", {
              className: "container p-5",
              children: [
                Object(O.jsx)("img", {
                  className: "footer-logo",
                  src: W,
                  alt: "",
                }),
                Object(O.jsxs)("div", {
                  className: "row mt-2",
                  children: [
                    Object(O.jsxs)("div", {
                      className: "col-md-3 ",
                      children: [
                        Object(O.jsx)("h3", { children: "Contact Us" }),
                        Object(O.jsxs)("p", {
                          children: [
                            Object(O.jsx)("i", { class: "fas fa-phone" }),
                            " +91 892 944 8112",
                          ],
                        }),
                        Object(O.jsxs)("p", {
                          children: [
                            Object(O.jsx)("i", { class: "far fa-envelope" }),
                            " care@lyfboat.com",
                          ],
                        }),
                        Object(O.jsxs)("p", {
                          children: [
                            Object(O.jsx)("i", {
                              class: "fas fa-map-marker-alt",
                            }),
                            " 48 Gulshan Avenue, Dhaka.",
                          ],
                        }),
                        Object(O.jsxs)("p", {
                          children: [
                            Object(O.jsx)("i", {
                              class: "fab fa-facebook-square icon",
                            }),
                            Object(O.jsx)("i", {
                              class: "fab fa-instagram-square icon px-2",
                            }),
                            Object(O.jsx)("i", {
                              class: "fab fa-twitter-square icon",
                            }),
                            Object(O.jsx)("i", {
                              class: "fab fa-linkedin px-2 icon",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(O.jsx)("div", {
                      className: "col-md-3 mx-auto",
                      children: Object(O.jsxs)("div", {
                        children: [
                          Object(O.jsx)("h3", { children: "About Us" }),
                          Object(O.jsx)("p", { children: "Careers" }),
                          Object(O.jsx)("p", { children: "Services" }),
                          Object(O.jsx)("p", {
                            children: "General Health Advisory",
                          }),
                          Object(O.jsx)("p", { children: "Our Blog" }),
                        ],
                      }),
                    }),
                    Object(O.jsx)("div", {
                      className: "col-md-3 ",
                      children: Object(O.jsxs)("div", {
                        children: [
                          Object(O.jsx)("h3", { children: "Patients" }),
                          Object(O.jsx)("p", { children: "How it Works" }),
                          Object(O.jsx)("p", { children: "Find a Hospital" }),
                          Object(O.jsx)("p", { children: "Find a Doctor" }),
                          Object(O.jsx)("p", { children: "Review Policy" }),
                        ],
                      }),
                    }),
                    Object(O.jsx)("div", {
                      className: "col-md-3 ",
                      children: Object(O.jsxs)("div", {
                        children: [
                          Object(O.jsx)("h3", { children: "Providers" }),
                          Object(O.jsx)("p", { children: "How it Workes" }),
                          Object(O.jsx)("p", {
                            children: "Hospital Registration",
                          }),
                          Object(O.jsx)("p", {
                            children: "Doctor Registration",
                          }),
                          Object(O.jsx)("p", { children: "My Account" }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(O.jsx)("hr", {}),
                Object(O.jsx)("div", {
                  className: "text-center",
                  children: Object(O.jsx)("small", {
                    children:
                      " \xa9 Copiright 2021 MedService. All Rights Reserved",
                  }),
                }),
              ],
            }),
          });
        },
        J = c(133),
        H = c(131),
        _ = c(134),
        K = (c(125), c(54)),
        Y = function () {
          var e = y(),
            t = e.user,
            c = e.handleSignOut;
          return Object(O.jsx)(O.Fragment, {
            children: Object(O.jsx)(J.a, {
              className: "nav-bar",
              collapseOnSelect: !0,
              bg: "light",
              variant: "light",
              expand: "lg",
              sticky: "top",
              children: Object(O.jsxs)(H.a, {
                children: [
                  Object(O.jsxs)("div", {
                    className: "d-flex",
                    children: [
                      Object(O.jsx)(J.a.Brand, {
                        children: Object(O.jsx)("img", {
                          className: "w-25",
                          src: W,
                          alt: "",
                        }),
                      }),
                      Object(O.jsx)(J.a.Toggle, {
                        "aria-controls": "responsive-navbar-nav",
                      }),
                    ],
                  }),
                  Object(O.jsxs)(J.a.Collapse, {
                    className: " justify-content-end",
                    children: [
                      Object(O.jsx)(_.a.Link, {
                        className: "text-center text-dark",
                        as: K.a,
                        to: "/home",
                        children: "Home",
                      }),
                      Object(O.jsx)(_.a.Link, {
                        className: "text-center text-dark",
                        as: K.a,
                        to: "/destinations",
                        children: "Tours",
                      }),
                      Object(O.jsx)(_.a.Link, {
                        className: "text-center text-dark",
                        as: K.a,
                        to: "/myOrder",
                        children: "My Orders",
                      }),
                      Object(O.jsx)(_.a.Link, {
                        className: "text-center text-dark",
                        as: K.a,
                        to: "/allOrders",
                        children: "All Orders",
                      }),
                      t.email
                        ? Object(O.jsxs)(_.a.Link, {
                            className: "text-dark text-center",
                            children: [
                              "Signed: ",
                              t.displayName,
                              Object(O.jsx)("span", {
                                className: "ps-3",
                                onClick: c,
                                children: "Logout",
                              }),
                            ],
                          })
                        : Object(O.jsx)(_.a.Link, {
                            className: "text-center text-dark",
                            as: r.b,
                            to: "/login",
                            children: "Login",
                          }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        $ = c(10),
        X = c(132),
        Q = ["children"],
        V = function (e) {
          var t = e.children,
            c = Object($.a)(e, Q),
            s = y(),
            n = s.user;
          return s.isLoading
            ? Object(O.jsx)(X.a, { animation: "border", variant: "danger" })
            : Object(O.jsx)(
                j.b,
                Object(p.a)(
                  Object(p.a)({}, c),
                  {},
                  {
                    render: function (e) {
                      var c = e.location;
                      return n.email
                        ? t
                        : Object(O.jsx)(j.a, {
                            to: { pathname: "/login", state: { from: c } },
                          });
                    },
                  }
                )
              );
        },
        Z =
          (c(128),
          function () {
            var e = Object(s.useState)([]),
              t = Object(l.a)(e, 2),
              c = t[0],
              n = t[1];
            return (
              Object(s.useEffect)(function () {
                fetch("https://floating-plains-91880.herokuapp.com/orders")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return n(e);
                  });
              }, []),
              Object(O.jsxs)("div", {
                children: [
                  Object(O.jsxs)("h2", {
                    className: "text-center",
                    children: [
                      "All Orders: ",
                      null === c || void 0 === c ? void 0 : c.length,
                    ],
                  }),
                  Object(O.jsx)("div", {
                    className: "container",
                    children: Object(O.jsx)("div", {
                      className: "row g-3 mt-4",
                      children: c.map(function (e) {
                        return Object(O.jsx)(
                          "div",
                          {
                            className: "col-md-4",
                            children: Object(O.jsxs)("div", {
                              className: "card m-2 p-3",
                              children: [
                                Object(O.jsx)("div", {
                                  className: " text-center",
                                  children: Object(O.jsx)("img", {
                                    className: "img-fluid card-img rounded",
                                    src: e.img,
                                    alt: "",
                                  }),
                                }),
                                Object(O.jsxs)("div", {
                                  className: "meal-info text-center",
                                  children: [
                                    Object(O.jsx)("h4", { children: e.name }),
                                    Object(O.jsx)("p", {
                                      children: e.description,
                                    }),
                                    Object(O.jsxs)("p", {
                                      children: [e.days, " Days"],
                                    }),
                                  ],
                                }),
                                Object(O.jsx)("hr", {}),
                                Object(O.jsxs)("h3", {
                                  className: "price fw-bold",
                                  children: ["$", e.price],
                                }),
                                Object(O.jsxs)("small", {
                                  className: "pending",
                                  children: [
                                    " ",
                                    "Status:",
                                    Object(O.jsx)("span", {
                                      className: "text-danger ps-1",
                                      children: e.status,
                                    }),
                                  ],
                                }),
                                Object(O.jsx)("div", {
                                  className: "details",
                                  children: Object(O.jsxs)("button", {
                                    className: " btn btn-warning",
                                    children: [
                                      Object(O.jsx)("i", {
                                        class: "fas pe-2 fa-myOrder-arrow-down",
                                      }),
                                      "Buy Now",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          },
                          e._id
                        );
                      }),
                    }),
                  }),
                ],
              })
            );
          });
      var ee = function () {
          return Object(O.jsx)(u, {
            children: Object(O.jsxs)(r.a, {
              children: [
                Object(O.jsx)(Y, {}),
                Object(O.jsxs)(j.d, {
                  children: [
                    Object(O.jsx)(j.b, {
                      exact: !0,
                      path: "/",
                      children: Object(O.jsx)(B, {}),
                    }),
                    Object(O.jsx)(j.b, {
                      exact: !0,
                      path: "/home",
                      children: Object(O.jsx)(B, {}),
                    }),
                    Object(O.jsx)(j.b, {
                      exact: !0,
                      path: "/destinations",
                      children: Object(O.jsx)(k, {}),
                    }),
                    Object(O.jsx)(V, {
                      exact: !0,
                      path: "/destination/:destinationId",
                      children: Object(O.jsx)(U, {}),
                    }),
                    Object(O.jsx)(j.b, {
                      exact: !0,
                      path: "/addDestination",
                      children: Object(O.jsx)(v, {}),
                    }),
                    Object(O.jsx)(j.b, {
                      exact: !0,
                      path: "/myOrder",
                      children: Object(O.jsx)(w, {}),
                    }),
                    Object(O.jsx)(j.b, {
                      exact: !0,
                      path: "/allOrders",
                      children: Object(O.jsx)(Z, {}),
                    }),
                    Object(O.jsx)(j.b, {
                      exact: !0,
                      path: "/login",
                      children: Object(O.jsx)(F, {}),
                    }),
                    Object(O.jsx)(j.b, {
                      exact: !0,
                      path: "/register",
                      children: Object(O.jsx)(q, {}),
                    }),
                    Object(O.jsx)(j.b, {
                      path: "*",
                      children: Object(O.jsx)(M, {}),
                    }),
                  ],
                }),
                Object(O.jsx)(G, {}),
              ],
            }),
          });
        },
        te = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 136))
              .then(function (t) {
                var c = t.getCLS,
                  s = t.getFID,
                  n = t.getFCP,
                  a = t.getLCP,
                  i = t.getTTFB;
                c(e), s(e), n(e), a(e), i(e);
              });
        };
      i.a.render(
        Object(O.jsx)(n.a.StrictMode, { children: Object(O.jsx)(ee, {}) }),
        document.getElementById("root")
      ),
        te();
    },
    78: function (e, t, c) {},
    90: function (e, t, c) {},
  },
  [[129, 1, 2]],
]);
//# sourceMappingURL=main.db7bd630.chunk.js.map
