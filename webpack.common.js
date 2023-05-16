const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    navbar: './src/javascript/navbar.js',
    titleimage: './src/javascript/titleimage.js',
    articles: './src/javascript/articles.js',
    styles: './src/javascript/styles.js',
    influencers: './src/javascript/influencers.js',
    antitrends: './src/javascript/antitrends.js',
    mainpage: './src/javascript/mainpage.js',
    searchbar: './src/javascript/searchbar.jsx',
    search: './src/javascript/search.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    // Main Page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['mainpage', 'navbar', 'searchbar']
    }),

    // Search
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/search.html',
      filename: './search.html',
      chunks: ['navbar', 'searchbar', 'search']
    }),

    // Styleguide
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index']
    }),

    //About
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index']
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/landing.html',
      filename: './landing.html',
      chunks: ['index', 'navbar', 'searchbar']
    }),

    // Errors
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/404.html',
      filename: './404.html',
      chunks: ['navbar']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/400.html',
      filename: './400.html',
      chunks: ['navbar']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/500.html',
      filename: './500.html',
      chunks: ['navbar']
    }),

    //Styles
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles.html',
      filename: './styles.html',
      chunks: ['styles', 'navbar', 'titleimage']
    }),

    //Styles article

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/sport-chic.html',
      filename: './styles/sport-chic.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/50s-style.html',
      filename: './styles/50s-style.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/classic.html',
      filename: './styles/classic.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/Y2K.html',
      filename: './styles/Y2K.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/smart-casual.html',
      filename: './styles/smart-casual.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/minimalism.html',
      filename: './styles/minimalism.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/lingerie.html',
      filename: './styles/lingerie.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/country.html',
      filename: './styles/country.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/animalism.html',
      filename: './styles/animalism.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/baby-doll.html',
      filename: './styles/baby-doll.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/art-deco.html',
      filename: './styles/art-deco.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/boho.html',
      filename: './styles/boho.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/80s-style.html',
      filename: './styles/80s-style.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/combined-vintage.html',
      filename: './styles/combined-vintage.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/business-casual.html',
      filename: './styles/business-casual.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/gothic.html',
      filename: './styles/gothic.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/hip-hop.html',
      filename: './styles/hip-hop.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/futurism.html',
      filename: './styles/futurism.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/street-style.html',
      filename: './styles/street-style.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/styles/avangard.html',
      filename: './styles/avangard.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    //influencers
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers.html',
      filename: './influencers.html',
      chunks: ['influencers', 'navbar']
    }),

    //individuals article

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/lil-nas-x.html',
      filename: './influencers/individuals/lil-nas-x.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/billie-eilish.html',
      filename: './influencers/individuals/billie-eilish.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/kanye.html',
      filename: './influencers/individuals/kanye.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/zendaya.html',
      filename: './influencers/individuals/zendaya.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/timothee-chalamet.html',
      filename: './influencers/individuals/timothee-chalamet.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/harry-styles.html',
      filename: './influencers/individuals/harry-styles.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/freddie-mercury.html',
      filename: './influencers/individuals/freddie-mercury.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/lady-gaga.html',
      filename: './influencers/individuals/lady-gaga.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/rhianna.html',
      filename: './influencers/individuals/rhianna.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/individuals/jenna-ortega.html',
      filename: './influencers/individuals/jenna-ortega.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    //Movie article
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/movies/sex-and-the-city.html',
      filename: './influencers/movies/sex-and-the-city.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/movies/euphoria.html',
      filename: './influencers/movies/euphoria.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/movies/sex-education.html',
      filename: './influencers/movies/sex-education.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/influencers/movies/devil-wears-prada.html',
      filename: './influencers/movies/devil-wears-prada.html',
      chunks: ['articles', 'navbar', 'titleimage']
    }),

    //antitrends
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/antitrends.html',
      filename: './antitrends.html',
      chunks: ['antitrends', 'navbar']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/Navbar.html'),
        location: 'Navbar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/BlackNavbar.html'),
        location: 'BlackNavbar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/BlackFooter.html'),
        location: 'BlackFooter',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/GreenFooter.html'),
        location: 'GreenFooter',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/Footer.html'),
        location: 'Footer',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
