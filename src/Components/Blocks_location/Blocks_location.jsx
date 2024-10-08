/* eslint-disable react/no-unescaped-entities */

import universal from "../../assets/images/slider-1.jpg";

const Blocks_location = () => {
  return (
    <div className="blocks_location">
      <div className="container">
        <div className="blocks_location_box">
          <div className="blocks_location_card_left">
            <img
              className="blocks_location_card_left_img"
              src={universal}
              alt=""
            />
            <div className="blocks_location_map_text">
              {/* <div className="blocks_location_map_text_box">

                <svg className="blocks_location_map_text_img" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="blocks_location_map_text_img_color" d="M16.6665 19.3506V25.3332C16.6665 25.7012 16.9518 25.9999 17.3052 25.9999H24.0292C24.3812 25.9999 24.6665 25.7012 24.6665 25.3332V19.3146" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="blocks_location_map_text_img_color" d="M15.334 20.2227L20.7767 16.6667L26.0007 20.2227" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="blocks_location_map_text_img_color" fill-rule="evenodd" clip-rule="evenodd" d="M11.941 15.1559C13.7695 15.1559 15.2517 13.6737 15.2517 11.8453C15.2517 10.0168 13.7695 8.53461 11.941 8.53461C10.1126 8.53461 8.63037 10.0168 8.63037 11.8453C8.63037 13.6737 10.1126 15.1559 11.941 15.1559Z" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="blocks_location_map_text_img_color" d="M21.852 12.5653C22.0253 9.8173 21.0707 7.01197 18.9707 4.91197C15.088 1.0293 8.79467 1.0293 4.912 4.91197C1.02933 8.79464 1.02933 15.088 4.912 18.9706L11.9413 26" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div> */}
              <p className="blocks_location_map_text_text">
                Majmua arxitekturasida yashil hududlar va ochiq maydonlar bilan uygʻunlik yaratishga alohida eʼtibor qaratilgan.                </p>
              {/* <p className="blocks_location_map_text_text2">Xaritada ko‘rish</p> */}
            </div>
          </div>

          <div className="blocks_location_card_text">
            <h2 className="blocks_location_title">Majmua arxitekturasi</h2>
            <p className="blocks_location_text">
              Sohil turar-joy majmuasi Samarqand shahrida zamonaviy arxitektura va innovatsion dizaynni birlashtirgan loyiha hisoblanadi.</p>
            <p className="blocks_location_text">
              Majmua arxitekturasi zamonaviy dizayn tamoyillariga asoslanib, eng so'nggi qurilish materiallari va texnologiyalaridan foydalangan holda yaratilgan. Har bir bino nafaqat estetik jihatdan jozibali, balki ko'plab funksional talablarga ham javob beradi, bu esa yashovchilarga qulay va farovon hayot taqdim etadi.</p>
          </div>


          <div className="blocks_location_card_icons">
            <div className="blocks_location_card_icon">

              <div className="blocks_location_icon_text" >
                <div className="blocks_location_svg_box">
                  <svg className="blocks_location_svg_card" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.3207 65.5145L73.1824 65.6259L73.1947 73.2104L56.3453 73.1832L56.3207 65.5145ZM7.89479 68.2395C6.47774 60.5128 18.5412 58.3693 19.7707 66.361C20.9616 74.1028 9.2702 75.7415 7.89479 68.2395ZM53.5642 73.2478L20.3103 73.1822C20.8565 72.1661 21.611 71.4994 22.2357 69.811C23.1482 67.3481 22.603 17.6607 22.603 17.5961L22.62 14.9721C29.2338 15.3907 64.8249 15.0432 73.1416 15.0395C73.4549 29.9891 73.1899 47.4297 73.1984 62.8446C70.4912 62.8232 54.6689 62.3362 53.834 63.5246C53.3749 64.1782 53.5424 71.8365 53.5622 73.2487L53.5642 73.2478ZM19.8456 60.7601C14.4765 57.1726 12.6069 58.1933 8.00555 60.4932C8.24693 50.7738 8.02448 40.7649 8.02448 31.0117C8.02448 26.1516 8.16742 21.0824 8.02732 16.2484C7.93551 13.0524 7.83989 7.63871 13.8461 7.72394C20.0169 7.81197 19.8427 13.6433 19.8371 16.5884L19.8456 60.7601ZM5.13643 68.7275C6.94158 74.924 10.0521 75.9288 17.2367 75.9252H71.1414C73.3026 75.9317 74.7746 76.3043 75.5905 75.3238L75.9502 44.7618C75.9218 34.265 76.0723 23.7317 75.954 13.2368C74.9477 11.7985 72.8 12.2957 70.4628 12.2967L50.1215 12.2957C44.989 12.2948 26.1252 12.5458 22.6607 12.2124C21.6999 10.2599 21.4567 7.78574 17.8274 5.91845C15.2291 4.58119 11.5458 4.71323 9.18406 6.25558C3.55183 9.93398 5.23581 16.6821 5.23581 24.303L5.13643 68.7275Z" fill="#000" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7575 63.7787L30.9192 63.8555L30.9917 67.1809L27.7181 67.2018L27.7575 63.7787ZM46.7494 41.5587L46.7741 44.3768L51.3494 44.4015L51.3328 50.6294L35.7024 50.5877L35.5393 39.3293C33.6941 38.1261 33.2531 39.1938 32.2485 37.1067C33.7922 36.3329 35.0929 34.9314 36.6081 33.8173C39.1373 31.9559 42.1056 32.6139 46.1912 32.7012L46.1032 29.8631L41.8947 29.9618C42.3898 29.1927 41.9057 29.8109 42.585 29.1424L44.2561 27.8148C45.0894 27.2279 46.0491 26.7101 47.3848 27.0469C48.5608 27.3418 59.3273 36.2855 60.7885 37.4604C59.8407 38.1346 60.4384 38.0131 59.242 38.5177C58.2428 38.9387 58.3593 38.4286 57.5508 39.5028C56.646 41.6241 57.2601 47.8151 57.2895 50.6285L54.0334 50.621C54.0729 46.7882 54.3405 45.6777 53.7318 41.8915C52.0406 41.167 48.9165 41.6052 46.7494 41.5587ZM62.0279 19.9218L65.3343 19.8658L65.2436 23.2443L62.0699 23.1201L62.0279 19.9218ZM27.72 19.8658L30.9816 19.8858L30.9622 23.2074L27.7227 23.2378L27.72 19.8658ZM25.4117 25.743C26.7254 26.1982 33.6591 26.9084 33.6491 24.6573L33.6418 22.4829L45.1462 22.4981C45.1324 25.541 45.7612 23.2861 42.3246 25.7904C34.6034 31.4144 39.8065 29.6128 25.7051 29.9503L25.6785 32.5589L33.3804 32.6101C33.0221 33.0349 33.2 32.849 32.8278 33.2378C31.6453 34.4734 28.7659 36.0475 28.7677 37.2223C29.2196 38.6713 31.3143 40.8209 33.0038 41.1575C32.9791 56.738 30.8477 53.0958 45.1635 53.3898L45.1086 54.8833C40.8543 55.2009 34.5777 54.9582 29.8732 55.0464L29.6799 47.2035L27.2039 47.1903L27.0315 53.8639C27.0471 58.5748 26.4788 57.802 33.9947 57.802C37.5322 57.802 41.6885 58.0029 45.1489 57.7374L45.1498 63.7123L33.6427 63.6953C33.6234 60.4011 32.7443 61.0449 29.7303 61.0601C24.7132 61.0837 25.0368 59.7856 25.0368 67.4474C25.0368 70.495 25.9425 69.9679 30.0548 69.9612C33.8114 69.9565 33.6188 70.3443 33.6473 66.4774L47.8504 66.4802L47.8367 53.422L51.3594 53.3784C51.3549 55.0938 50.7737 57.9584 52.2991 58.6326C52.7959 58.8526 52.4741 58.7615 53.0471 58.8308L67.3391 58.845L67.406 56.0848L54.0408 56.0998L54.0233 53.3263C56.2326 53.442 58.4088 53.6724 59.8397 52.7801C60.1834 49.7068 59.9873 44.4052 59.9855 41.2116C62.245 40.47 64.2361 38.1327 64.2361 37.2195C63.7897 35.5867 61.5667 34.3663 60.3091 33.4247L49.4656 24.9388C47.5983 23.8882 47.8458 25.0385 47.8229 22.4943L59.419 22.482C59.2907 26.7311 59.6545 26.0028 64.1976 26.0028C68.4493 26.0028 67.9175 26.5518 67.9972 20.2186C68.0432 16.5593 67.571 17.1292 62.5476 17.059C59.8067 17.0211 59.5061 16.7566 59.3236 19.6231L33.7994 19.7151C33.3255 17.4924 33.9865 17.1008 31.4014 17.0458C24.4904 16.9007 25.0056 16.8542 25.0304 20.9136C25.0423 22.6925 24.8233 24.479 25.41 25.7391L25.4117 25.743Z" fill="#000" />
                  </svg>
                </div>
                Qulay  rejalashtirish
              </div>
              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg className="blocks_location_svg_card" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.26 62.8588C33.7993 25.9684 25.0137 31.8908 63.7664 31.3842L63.7474 62.8145L32.2537 62.8652L32.26 62.8588ZM23.5378 51.3749H29.397L29.3716 62.8208L23.4934 62.7575L23.5378 51.3749ZM9.08947 51.3242L20.567 51.3686L20.5355 62.8019L9.06413 62.8525L9.0958 51.3306L9.08947 51.3242ZM9.08313 36.952L25.1721 36.9393L29.3906 36.9456L29.378 48.4549L19.7119 48.4485L8.98179 48.5498L9.03879 42.8744L9.08313 36.9393V36.952ZM9.21615 22.5415L20.5291 22.662L20.5607 33.8228C18.6414 34.3802 11.5344 34.0192 9.03246 34.0255L9.21615 22.5415ZM52.3584 22.5669L63.7158 22.529L63.6524 28.4324L52.3459 28.3184L52.3584 22.5669ZM23.6201 22.5542L49.3878 22.5163L49.299 28.4768C41.3116 28.0524 32.5008 27.4696 30.3597 34.0382L23.4808 33.9875L23.6264 22.5542H23.6201ZM37.9354 8.12491L63.76 8.16925L63.6904 19.6089L37.9228 19.4948L37.9354 8.13125V8.12491ZM9.11481 8.11858L34.9648 8.20092C35.1041 21.2937 35.7059 19.6722 32.3551 19.6089L9.07047 19.5835L9.10847 8.11858H9.11481ZM6.11239 57.5445C6.25808 59.8311 5.84001 63.5113 6.41643 65.3799C8.60173 66.2096 64.3872 66.1969 66.4394 65.3926C67.1742 62.9918 66.7245 26.4118 66.7308 18.6714L66.7689 7.06076C66.6611 5.42653 66.6168 5.4012 65.0712 5.1795C58.7624 5.24919 8.08233 4.51441 6.7078 5.59123C6.05538 6.22465 6.11872 6.85807 6.12506 8.08057C6.17572 18.6587 5.77668 34.5259 6.18839 43.9069C6.35309 47.6694 6.40376 53.8706 6.11239 57.5445Z" fill="#000" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.393 55.9305C41.8633 56.5702 43.1428 54.0113 44.72 52.5354L53.7653 43.4965C54.6521 42.578 58.0726 40.0507 56.7297 38.6064C55.1271 36.8835 52.4098 40.665 51.4913 41.5645C49.9522 43.0784 48.5586 44.415 47.0383 45.9858C45.4738 47.601 44.0486 48.9945 42.4334 50.578C39.792 53.1562 38.5189 53.8719 39.393 55.9242V55.9305Z" fill="#000" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.537 46.5406C40.4436 46.7812 40.8045 46.0782 41.7294 45.1216C43.75 43.0187 49.5838 38.4264 46.8601 37.1659C45.1561 36.3741 40.8172 41.5365 38.9929 43.4114C37.8149 44.6213 37.6502 45.071 38.537 46.5342V46.5406Z" fill="#000" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9072 50.0783C58.6229 49.0648 58.2049 46.9554 56.0575 47.7473C55.1897 48.0639 48.8935 54.6072 48.7541 54.8986C48.1462 56.1844 48.9696 57.6159 50.5721 57.1029L55.4874 52.3902C55.9055 51.9595 57.7931 50.2366 57.9072 50.0719V50.0783Z" fill="#000" />
                  </svg>


                </div>
                Yevropa fasad  materiallari
              </div>
              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg className="blocks_location_svg_card" width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70.8535 2.44696C72.3403 3.1 72.8695 4.23001 72.8444 5.83729C72.7939 16.2091 72.8191 26.6061 72.8191 36.9779C72.8191 38.2337 72.5419 38.7108 71.7859 38.7108C71.0299 38.7108 70.7024 38.2086 70.7024 36.9277V5.63644C70.7024 4.55645 70.6771 4.50628 69.5935 4.50628H11.3566C10.3235 4.50628 10.2982 4.55661 10.2982 5.58627C10.2982 16.0334 10.2982 26.4806 10.2982 36.9277C10.2982 37.2542 10.273 37.5806 10.1974 37.9072C10.0463 38.4345 9.64299 38.6857 9.13905 38.6354C8.60986 38.5852 8.28232 38.2588 8.20658 37.7313C8.1815 37.5054 8.18149 37.2542 8.18149 37.0282C8.18149 26.6312 8.20658 16.2091 8.15625 5.81221C8.15625 4.20492 8.66019 3.07476 10.1471 2.42188" fill="black" />
                    <path d="M10.2097 69.1754H13.6721V12.1109C13.6721 10.5606 13.8996 10.3105 15.4665 10.3105H65.5586C67.1003 10.3105 67.353 10.5856 67.353 12.1109V68.2002V69.2005H70.8155V68.3502C70.8155 60.7233 70.8155 53.0963 70.8155 45.4694C70.8155 45.1943 70.8155 44.9193 70.8659 44.6443C70.9923 44.0941 71.3462 43.7689 71.9275 43.8189C72.5087 43.869 72.8626 44.2191 72.9131 44.8192C72.9385 45.0193 72.9131 45.2443 72.9131 45.4444V68.3251V69.2005C73.1406 69.2254 73.3175 69.2504 73.4945 69.2504C74.9603 69.3004 75.8449 70.0755 75.9459 71.5009C76.0218 72.4512 76.0218 73.4266 75.9207 74.3767C75.8197 75.7772 74.9098 76.5523 73.4691 76.5523C67.2014 76.5523 60.9335 76.5523 54.6404 76.5523C39.0215 76.5523 23.4024 76.5272 7.78336 76.5772C6.16582 76.5772 4.92742 75.702 5.00331 73.8265C5.02855 73.0514 4.97806 72.2762 5.02855 71.526C5.12969 70.0757 5.98895 69.3004 7.45486 69.2504C7.60649 69.2504 7.78336 69.2504 8.06136 69.2504V68.4003V45.4444C8.06136 45.2194 8.03612 44.9693 8.06136 44.7443C8.13725 44.1941 8.46574 43.844 9.02175 43.794C9.55252 43.744 9.93166 44.0441 10.058 44.5442C10.1338 44.8192 10.1338 45.1444 10.1338 45.4444C10.1338 53.0713 10.1338 60.6983 10.1338 68.3502M57.547 69.1754C57.547 69.1503 57.547 69.1003 57.547 69.0754C55.2218 68.2002 52.8966 67.3499 50.5462 66.4747C49.1055 65.9496 48.8275 65.5495 48.8275 64.0492C48.8275 49.3954 48.8275 34.7417 48.8023 20.088C48.8023 18.9128 49.2319 18.1876 50.3187 17.6875C53.8064 16.087 57.2436 14.4366 60.7062 12.8112C60.9083 12.7111 61.1104 12.5862 61.4138 12.4361H19.4849C19.8893 12.6111 20.0916 12.7362 20.319 12.8112C23.8068 14.4366 27.2945 16.087 30.7823 17.7124C31.7427 18.1625 32.1976 18.8127 32.1976 19.888C32.1723 34.6667 32.1976 49.4204 32.1976 64.1991C32.1976 65.4495 31.8437 65.9496 30.6307 66.3998C29.6197 66.7748 28.6088 67.1499 27.5977 67.5249C26.2331 68.0501 24.8429 68.5503 23.4782 69.0505C23.4782 69.0754 23.5036 69.1254 23.5036 69.1503H57.547V69.1754ZM65.23 13.0612C64.952 13.1862 64.6994 13.2613 64.4971 13.3613C60.2259 15.3618 55.9547 17.3874 51.6835 19.3629C51.1275 19.6128 50.9504 19.888 50.9504 20.5131C50.9758 30.2657 50.9758 40.0181 50.9758 49.7705C50.9758 54.4218 50.9758 59.0978 50.9504 63.774C50.9504 64.2742 51.1275 64.4992 51.5823 64.6492C55.5503 66.0997 59.5182 67.6 63.4862 69.0254C64.017 69.2254 64.6487 69.1754 65.2554 69.2504V13.0612H65.23ZM15.7952 69.3255C16.528 69.1754 17.2104 69.1503 17.8169 68.9253C21.7091 67.5249 25.5507 66.0497 29.4428 64.6492C29.8977 64.4743 30.0999 64.2991 30.0999 63.774C30.0745 49.2954 30.0745 34.7917 30.0999 20.313C30.0999 19.888 29.9988 19.663 29.5692 19.4629C25.1463 17.4123 20.7233 15.3118 16.3005 13.2362C16.1489 13.1613 15.972 13.1362 15.7952 13.0612V69.3255ZM40.5125 71.2759H8.26363C8.06136 71.2759 7.88449 71.2759 7.70762 71.2759C7.32848 71.251 7.15161 71.401 7.15161 71.8012C7.17686 72.3513 7.15161 72.8764 7.15161 73.4015C7.15161 74.4016 7.15161 74.4016 8.18774 74.4016H72.8374C73.0142 74.4016 73.1659 74.3767 73.3429 74.4016C73.7219 74.4267 73.8989 74.2767 73.8989 73.8766C73.8735 73.3015 73.8989 72.7513 73.8989 72.2011C73.8989 71.2508 73.8989 71.251 72.9385 71.251H40.5125V71.2759Z" fill="black" />
                    <path d="M63.3539 52.1711C63.3539 55.5299 63.3048 58.9142 63.3783 62.273C63.4029 63.7743 62.4465 64.2577 61.2693 63.7743C59.2092 62.8836 57.1248 62.0693 55.0402 61.2042C54.1082 60.8226 53.9121 60.5173 53.9121 59.4231C53.9121 53.647 53.9121 47.8963 53.9121 42.1202C53.9121 40.8225 54.3045 40.3899 55.5308 40.3645C57.6398 40.3135 59.7488 40.2881 61.8333 40.2881C62.8878 40.2881 63.3292 40.7461 63.3292 41.8403C63.3539 45.3008 63.3539 48.736 63.3539 52.1711ZM55.9476 42.4765V43.4179C55.9476 48.4051 55.9721 53.3925 55.923 58.3798C55.923 59.0924 56.1193 59.4231 56.7568 59.6522C58.2529 60.212 59.7243 60.848 61.2693 61.4841V42.4765H55.9476Z" fill="black" />
                    <path d="M63.3524 27.6937C63.3524 30.8552 63.3524 33.9926 63.3524 37.1542C63.3524 38.3517 62.9602 38.711 61.7586 38.711C59.6989 38.711 57.6391 38.711 55.5795 38.687C54.378 38.687 53.9121 38.232 53.9121 37.0822C53.9121 31.909 53.9121 26.7117 53.9121 21.5383C53.9121 20.7719 54.2064 20.2929 54.9175 19.9577C57.0262 18.9517 59.1349 17.9457 61.2191 16.8679C62.4697 16.2213 63.426 16.9159 63.377 18.1852C63.3034 21.3467 63.3524 24.5083 63.3524 27.6937ZM61.2682 19.0954C60.9985 19.2152 60.8023 19.2869 60.6061 19.3827C59.233 20.0534 57.8845 20.748 56.4867 21.3707C56.0454 21.5623 55.8982 21.8257 55.8982 22.2808C55.9228 26.8554 55.8982 31.4538 55.8982 36.0284V36.6752H61.2437V19.0954H61.2682Z" fill="black" />
                    <path d="M17.6726 52.1345C17.6726 48.7462 17.6726 45.3324 17.6726 41.9441C17.6726 40.6958 18.0894 40.2881 19.291 40.2881C21.3756 40.3135 23.4602 40.339 25.5201 40.3645C26.6973 40.39 27.0897 40.8231 27.0897 41.9949C27.0897 47.8291 27.0897 53.6886 27.0897 59.5226C27.0897 60.3634 26.7464 60.8729 25.986 61.1787C23.877 62.0193 21.768 62.8855 19.6834 63.7771C18.6288 64.2358 17.5989 63.8281 17.6235 62.2995C17.7215 58.9112 17.6726 55.523 17.6726 52.1345ZM19.7816 42.479V61.4843C21.3756 60.8219 22.8961 60.1596 24.4166 59.5736C24.9316 59.3697 25.1033 59.1405 25.1033 58.5545C25.0786 53.4594 25.0786 48.3385 25.0786 43.2179C25.0786 42.9886 25.0542 42.7594 25.0542 42.4536H19.7816V42.479Z" fill="black" />
                    <path d="M17.648 27.5847C17.648 24.4501 17.6969 21.2915 17.6235 18.1331C17.5991 16.9367 18.5285 16.219 19.7761 16.8649C21.8796 17.9417 24.0077 18.9466 26.1358 19.9757C26.7962 20.2866 27.0897 20.7412 27.0897 21.4591C27.0897 26.6754 27.0897 31.9155 27.0897 37.1318C27.0897 38.2564 26.6249 38.687 25.4509 38.687C23.3717 38.711 21.2926 38.711 19.2134 38.711C18.0883 38.711 17.6724 38.3281 17.6724 37.2274C17.648 34.0212 17.648 30.7909 17.648 27.5847ZM24.9616 36.6771C25.0105 36.5815 25.035 36.5335 25.035 36.4857C25.035 31.6762 25.0594 26.8428 25.035 22.0334C25.035 21.842 24.7904 21.5549 24.5948 21.4591C23.2249 20.7652 21.8307 20.0953 20.4365 19.4253C20.2163 19.3296 19.9962 19.2338 19.7272 19.1142V36.7011H24.9616V36.6771Z" fill="black" />
                  </svg>
                </div>
                Mеtalloplastik
                dеrazalar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Blocks_location;
