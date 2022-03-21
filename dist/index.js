'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const formatClock = (time = 0) => {
  const hours = Math.floor(time / 3600).toString().padStart(2, "0");
  const minutes = Math.floor(time / 60 % 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return [hours, minutes, seconds];
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".button:hover{filter:brightness(90%) hue-rotate(var(--deg))}.button:active{filter:hue-rotate(calc(var(--deg) + 30deg))}.button{cursor:pointer;filter:hue-rotate(var(--deg))}.button__selected{filter:hue-rotate(calc(var(--deg) + 30deg)) brightness(130%)}.focus__buttons{align-items:center;display:flex;justify-content:center}";
styleInject(css_248z$3);

const Button = ({
  idx,
  icon,
  selected,
  handleSelected
}) => {
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: selected ? `button button__selected` : `button`,
    onClick: () => handleSelected(icon, idx)
  }, icon);
};

const ButtonContainer = ({
  buttons,
  selected,
  setSelected,
  setTime,
  setBlink,
  timerId,
  setTimerId,
  blinkId,
  setBlinkId,
  resetTime,
  myStorage
}) => {
  const handleSelected = (icon, idx) => {
    icon === `🔁` || idx !== undefined && setSelected(() => idx);

    switch (icon) {
      case `▶️`:
        {
          if (!timerId) {
            setTimerId(setInterval(() => {
              setTime(time => time + 1);
            }, 1000));
            setBlinkId(setInterval(() => {
              setBlink(blink => !blink);
            }, 500));
          }

          break;
        }

      case `⏸️`:
        {
          clearInterval(timerId);
          clearInterval(blinkId);
          setBlink(true);
          setTimerId(null);
          setBlinkId(null);
          break;
        }

      case `⏹️`:
        {
          clearInterval(timerId);
          clearInterval(blinkId);
          setTimerId(null);
          setBlinkId(null);
          resetTime();
          break;
        }

      case `🔁`:
        {
          myStorage.removeItem("focusHighScore");
          setTime(0);
          break;
        }

      default:
        return;
    }
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "focus__buttons"
  }, buttons.map((btn, idx) => /*#__PURE__*/React__default["default"].createElement(Button, {
    key: idx,
    idx: idx,
    icon: btn,
    selected: selected === idx ? true : false,
    handleSelected: handleSelected
  })));
};

var css_248z$2 = ".focus__timer{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.clock{background:var(--clockColor);border:var(--fontColor) outset;color:var(--fontColor);font-family:digital-7;height:1.5rem;margin-right:15px;padding:5px}.clock__hide__colon{color:var(--clockColor)}@media only screen and (max-width:800px){.focus__timer{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}}";
styleInject(css_248z$2);

const Clock = ({
  hours,
  minutes,
  seconds,
  blink
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "clock"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, hours), /*#__PURE__*/React__default["default"].createElement("span", {
    className: blink ? null : "clock__hide__colon"
  }, ":"), /*#__PURE__*/React__default["default"].createElement("span", null, minutes), /*#__PURE__*/React__default["default"].createElement("span", {
    className: blink ? null : "clock__hide__colon"
  }, ":"), /*#__PURE__*/React__default["default"].createElement("span", null, seconds));
};

const ClockContainer = ({
  time,
  setTime,
  label,
  buttons,
  myStorage
}) => {
  const [hours, minutes, seconds] = formatClock(time);
  const [blink, setBlink] = React.useState(true);
  const [selected, setSelected] = React.useState(undefined);
  const [timerId, setTimerId] = React.useState(null);
  const [blinkId, setBlinkId] = React.useState(null);
  const timeRef = React.useRef();
  timeRef.current = time;

  const resetTime = () => {
    setTime(0);
    setBlink(true);
  };

  React.useEffect(() => {
    const localFocusTime = parseInt(myStorage.getItem("focus"));
    localFocusTime ? setTime(localFocusTime) : setTime(0);
    window.addEventListener("beforeunload", e => {
      clearInterval(timerId);
      clearInterval(blinkId);
      myStorage.setItem("focus", timeRef.current);
    });
    return () => {
      clearInterval(timerId);
      clearInterval(blinkId);
      myStorage.setItem("timer", time);
    };
  }, [label === "Focus"]);
  const buttonProps = {
    buttons,
    selected,
    setSelected,
    setTime,
    timerId,
    setTimerId,
    blink,
    setBlink,
    blinkId,
    setBlinkId,
    resetTime,
    myStorage
  };
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: "focus__timer"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "focus__label"
  }, label, ":"), /*#__PURE__*/React__default["default"].createElement(Clock, {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    blink: blink
  }), /*#__PURE__*/React__default["default"].createElement(ButtonContainer, buttonProps));
};

var css_248z$1 = ".focus__theme{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap}@media only screen and (max-width:800px){.focus__theme{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}}";
styleInject(css_248z$1);

const ThemeOption = ({
  themeOption,
  toggle,
  setToggle,
  setTheme
}) => {
  const handleSelect = e => {
    if (!toggle) {
      console.log("newSet");
      setTheme(themeOption);
    }

    setToggle(toggle => !toggle);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "focus__option",
    style: {
      border: `5px var(--${themeOption.theme}-backgroundColor) double`,
      background: `var(--${themeOption.theme}-clockColor)`,
      color: `var(--${themeOption.theme}-backgroundColor)`
    },
    onClick: handleSelect
  }, themeOption.theme);
};

const Dropdown = ({
  theme,
  setTheme,
  themes
}) => {
  const [toggle, setToggle] = React.useState(false);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "focus__theme"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "focus__label"
  }, "Theme: "), /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "focus__dropdown"
  }, toggle ? themes && themes.map((theme, idx) => /*#__PURE__*/React__default["default"].createElement(ThemeOption, {
    key: idx,
    themeOption: theme,
    setTheme: setTheme,
    setToggle: setToggle
  })) : theme && /*#__PURE__*/React__default["default"].createElement(ThemeOption, {
    key: "default",
    themeOption: theme,
    setTheme: setTheme,
    toggle: toggle,
    setToggle: setToggle
  })));
};

var css_248z = ":root{--elegant-clockColor:#8a6626;--elegant-fontColor:#efc8b1;--elegant-backgroundColor:#efc8b1;--dependable-clockColor:#241f1c;--dependable-fontColor:#937047;--dependable-backgroundColor:#937047;--friendly-clockColor:#bdfff6;--friendly-fontColor:#e23c52;--friendly-backgroundColor:#e23c52;--laid-back-clockColor:#4d3227;--laid-back-fontColor:#ebc999;--laid-back-backgroundColor:#ebc999;--deg:180deg;--clockColor:var(--elegant-clockColor);--fontColor:var(--elegant-fontColor);--backgroundColor:var(--elegant-backgroundColor)}.focus__container{align-items:center;background-color:var(--backgroundColor);border-bottom:var(--clockColor) solid;box-shadow:var(--clockColor) 0,1px,10px;color:var(--clockColor);display:flex;font-size:1.5rem;justify-content:space-between;margin-bottom:10px;padding:5px;position:sticky;width:100%}.focus__container>div{display:inline-flex}@font-face{font-family:digital-7;src:url(../../fonts/digital-7.ttf)}@media only screen and (max-width:370px){.focus__container{-moz-transform:translateY(-30%) scale(.5);transform:translateY(-30%) scale(.5)}.focus__container,.focus__theme{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}.focus__theme{border-bottom:var(--clockColor) solid;border-top:var(--clockColor) solid;padding-bottom:10%;padding-top:10%;width:100%}.focus__timer{align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}}";
styleInject(css_248z);

const FocusTimer = () => {
  const [focus, setFocus] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [theme, setTheme] = React.useState(null);
  const [themes, setThemes] = React.useState(null);
  const myStorage = window.localStorage;
  const root = document.querySelector(":root");
  const rootStyle = getComputedStyle(root);
  React.useEffect(() => {
    const getTheme = myStorage.getItem("focusTheme");
    const getAllThemes = myStorage.getItem("focusAllThemes");
    getTheme ? setTheme(getTheme.split(",")) : setTheme({
      theme: "elegant",
      buttonDeg: "180deg"
    });
    getAllThemes ? setThemes(getAllThemes) : setThemes([{
      theme: "elegant",
      buttonDeg: "180deg"
    }, {
      theme: "dependable",
      buttonDeg: "222deg"
    }, {
      theme: "friendly",
      buttonDeg: "45deg"
    }, {
      theme: "laid-back",
      buttonDeg: "250deg"
    }]);
  }, []);
  React.useEffect(() => {
    setScore(() => {
      myStorage.setItem("focusHighScore", focus);
      return focus;
    });
  }, [focus > score]);
  React.useEffect(() => {
    const getTheme = myStorage.getItem("focusTheme");

    if (getTheme && getTheme !== theme) {
      myStorage.setItem("focusTheme", theme);
    }

    if (theme) {
      const clockColor = rootStyle.getPropertyValue("--" + theme.theme + "-clockColor");
      const fontColor = rootStyle.getPropertyValue("--" + theme.theme + "-fontColor");
      const backgroundColor = rootStyle.getPropertyValue("--" + theme.theme + "-backgroundColor");
      root.style.setProperty("--clockColor", clockColor);
      root.style.setProperty("--fontColor", fontColor);
      root.style.setProperty("--backgroundColor", backgroundColor);
      root.style.setProperty("--deg", theme.buttonDeg);
    }
  }, [theme]);
  React.useEffect(() => {
    const getAllThemes = JSON.parse(myStorage.getItem("focusAllThemes"));

    if (getAllThemes && getAllThemes !== themes) {
      myStorage.setItem("focusAllThemes", JSON.stringify(getAllThemes));
    }
  }, [themes]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "focus__container"
  }, /*#__PURE__*/React__default["default"].createElement(ClockContainer, {
    label: "Focus",
    time: focus,
    setTime: setFocus,
    buttons: [`▶️`, `⏸️`, `⏹️`],
    myStorage: myStorage
  }), /*#__PURE__*/React__default["default"].createElement(Dropdown, {
    theme: theme,
    setTheme: setTheme,
    themes: themes
  }), /*#__PURE__*/React__default["default"].createElement(ClockContainer, {
    label: "High Score",
    time: score,
    setTime: setScore,
    buttons: [`🔁`],
    myStorage: myStorage
  }));
};

exports.FocusTimer = FocusTimer;
