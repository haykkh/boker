# boker

> pokernow.club discord manager

![language](https://img.shields.io/badge/HTML-blue.svg?style=flat-square)![language](https://img.shields.io/badge/CSS-red.svg?style=flat-square)![language](https://img.shields.io/badge/Javascript-green.svg?style=flat-square)![language](https://img.shields.io/badge/Hyperapp-orange.svg?style=flat-square)

A browser based discord bot to manage [pokernow.club](https://pokernow.club) games. Based on [hyparcel](https://github.com/bonniss/hyparcel).

Uses [Hyperapp v2](https://github.com/jorgebucaran/hyperapp), [TailwindCSS](https://tailwindcss.com/), [Parcel v2](https://github.com/parcel-bundler/parcel/), and [PurgeCSS](https://github.com/FullHuman/purgecss).

## 📦 Installation

### 📋 Clone and install

```sh
git clone https://github.com/haykkh/boker.git

cd boker

yarn
```

## 🚀 Usage

### ⚡️ Run development server

```sh
yarn start
```

### 🛠️ Build for production

```sh
yarn build
```

### Controlling CSS

In development, you should have full power on utilities offered by Tailwind. Therefore, no CSS purging and minification are executed to keep bundling fast.

Tailor Tailwind to your need by [configuring `tailwind.config.js`](https://tailwindcss.com/docs/configuration). The CSS seed file is located at `src/css/main.pcss`. Note that as Purgecss is configured in `postcss.config.js`, you should keep `tailwind.config.js`'s `purge: false` to suppress warnings when bundling for production.

If you want to generate CSS only:

```sh
yarn build:css
```

By default, a verbose output is located at `src/css/style.css`.

## 📝 Contributing

1. Fork it (<https://github.com/haykkh/boker/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## 👨🏻 Meta

Hayk Khachatryan – [hi@hayk.io](mailto:hi@hayk.io)

[github.com/haykkh](https://github.com/haykkh/)
