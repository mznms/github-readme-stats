const icons = {
  star: `<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>`,
  commits: `<path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"/>`,
  prs: `<path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>`,
  prs_merged: `<path fill-rule="evenodd" d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />`,
  prs_merged_percentage: `<path fill-rule="evenodd" d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />`,
  issues: `<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>`,
  icon: `<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>`,
  contribs: `<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>`,
  fork: `<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>`,
  reviews: `<path fill-rule="evenodd" d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"/>`,
  discussions_started: `<path fill-rule="evenodd" d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z" />`,
  discussions_answered: `<path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />`,
  gist: `<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z" />`,
};

/**
 * Get rank icon
 *
 * @param {string} rankIcon - The rank icon type.
 * @param {string} rankLevel - The rank level.
 * @param {number} percentile - The rank percentile.
 * @returns {string} - The SVG code of the rank icon
 */
const rankIcon = (rankIcon, rankLevel, percentile) => {
  switch (rankIcon) {
    case "github":
      return `
        <svg x="-38" y="-30" height="66" width="66" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" data-testid="github-rank-icon">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
      `;
    case "percentile":
      return `
        <text x="-5" y="-12" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="percentile-top-header" class="rank-percentile-header">
          Top
        </text>
        <text x="-5" y="12" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="percentile-rank-value" class="rank-percentile-text">
          ${percentile.toFixed(1)}%
        </text>
      `;
    case "janken":
      const janken = [
        `
        <svg x="-38" y="-30" width="66" height="66" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_20020_3118)">
        <path d="M27.8228 9.47876H3.48999V18.807C3.48999 25.1583 8.63872 30.307 14.99 30.307H16.3228C18.4757 30.307 20.4905 29.7154 22.2134 28.6859L22.2175 28.7041C24.7364 27.2505 27.3068 24.6051 28.1215 21.3465C28.9529 18.0208 28.2562 15.6387 27.8228 14.7936V9.47876Z" fill="url(#paint0_radial_20020_3118)"/>
        </g>
        <g filter="url(#filter1_f_20020_3118)">
        <rect x="10.2801" y="12.9028" width="12.6777" height="6.19453" rx="3.09726" fill="url(#paint1_linear_20020_3118)"/>
        </g>
        <g filter="url(#filter2_f_20020_3118)">
        <path d="M15.0239 14.2834C14.5197 15.1507 13.6022 15.755 12.5539 15.755C11.6243 15.755 10.7975 15.4407 10.2706 14.7681C9.74225 15.3778 8.96221 15.7634 8.0921 15.7634C6.50064 15.7634 5.21049 14.4733 5.21049 12.8818V10.1777C5.21049 8.58624 6.50064 7.2961 8.0921 7.2961C8.74085 7.2961 9.33951 7.51048 9.82113 7.87227C10.204 6.62833 11.2829 6.06234 12.5539 6.06234C13.49 6.06234 14.3218 6.50868 14.8482 7.20015C15.1077 5.92807 16.2557 5.06519 17.6326 5.06519C18.8654 5.06519 19.9146 5.85077 20.3071 6.94863C20.7329 5.8892 21.77 5.14124 22.9818 5.14124C24.5732 5.14124 25.8634 6.43137 25.8634 8.02284V12.3579C25.8634 13.9494 24.5732 15.2395 22.9818 15.2395C21.8691 15.2395 20.9037 14.6089 20.4236 13.6856C20.1774 15.0029 19.0214 16 17.6326 16C16.4633 16 15.459 15.2932 15.0239 14.2834Z" fill="#B45A11"/>
        </g>
        <rect x="3.48999" y="5.13788" width="6.79009" height="9.97605" rx="3.39504" fill="url(#paint2_radial_20020_3118)"/>
        <rect x="3.48999" y="5.13788" width="6.79009" height="9.97605" rx="3.39504" fill="url(#paint3_radial_20020_3118)"/>
        <rect x="3.48999" y="5.13788" width="6.79009" height="9.97605" rx="3.39504" fill="url(#paint4_radial_20020_3118)"/>
        <rect x="3.48999" y="5.13788" width="6.79009" height="9.97605" rx="3.39504" fill="url(#paint5_radial_20020_3118)"/>
        <path d="M8.74684 7.07931C8.74684 4.72966 10.2669 3.68427 12.1419 3.68427C14.0169 3.68427 15.5369 5.20428 15.5369 7.07931V11.5879C15.5369 13.4629 14.0169 15.104 12.1419 15.104C10.2669 15.104 8.74684 14.0187 8.74684 11.5879V7.07931Z" fill="url(#paint6_radial_20020_3118)"/>
        <path d="M8.74684 7.07931C8.74684 4.72966 10.2669 3.68427 12.1419 3.68427C14.0169 3.68427 15.5369 5.20428 15.5369 7.07931V11.5879C15.5369 13.4629 14.0169 15.104 12.1419 15.104C10.2669 15.104 8.74684 14.0187 8.74684 11.5879V7.07931Z" fill="url(#paint7_radial_20020_3118)"/>
        <path d="M8.74684 7.07931C8.74684 4.72966 10.2669 3.68427 12.1419 3.68427C14.0169 3.68427 15.5369 5.20428 15.5369 7.07931V11.5879C15.5369 13.4629 14.0169 15.104 12.1419 15.104C10.2669 15.104 8.74684 14.0187 8.74684 11.5879V7.07931Z" fill="url(#paint8_radial_20020_3118)"/>
        <path d="M8.74684 7.07931C8.74684 4.72966 10.2669 3.68427 12.1419 3.68427C14.0169 3.68427 15.5369 5.20428 15.5369 7.07931V11.5879C15.5369 13.4629 14.0169 15.104 12.1419 15.104C10.2669 15.104 8.74684 14.0187 8.74684 11.5879V7.07931Z" fill="url(#paint9_radial_20020_3118)"/>
        <rect x="21.0327" y="2.59906" width="6.79009" height="11.8976" rx="3.39504" fill="#7DDE5B" fill-opacity="0.55"/>
        <rect x="21.0327" y="2.59906" width="6.79009" height="11.8976" rx="3.39504" fill="url(#paint10_radial_20020_3118)"/>
        <rect x="21.0327" y="2.59906" width="6.79009" height="11.8976" rx="3.39504" fill="url(#paint11_radial_20020_3118)"/>
        <rect x="21.0327" y="2.59906" width="6.79009" height="11.8976" rx="3.39504" fill="url(#paint12_radial_20020_3118)"/>
        <rect x="21.0327" y="2.59906" width="6.79009" height="11.8976" rx="3.39504" fill="url(#paint13_radial_20020_3118)"/>
        <path d="M14.7803 5.67551C14.7803 3.82798 16.278 2.50946 18.1255 2.50946C19.9731 2.50946 21.4708 4.00719 21.4708 5.85472V12.0474C21.4708 13.895 19.9731 15.3927 18.1255 15.3927C16.278 15.3927 14.7803 13.895 14.7803 12.0474V5.67551Z" fill="url(#paint14_radial_20020_3118)"/>
        <path d="M14.7803 5.67551C14.7803 3.82798 16.278 2.50946 18.1255 2.50946C19.9731 2.50946 21.4708 4.00719 21.4708 5.85472V12.0474C21.4708 13.895 19.9731 15.3927 18.1255 15.3927C16.278 15.3927 14.7803 13.895 14.7803 12.0474V5.67551Z" fill="url(#paint15_radial_20020_3118)"/>
        <path d="M14.7803 5.67551C14.7803 3.82798 16.278 2.50946 18.1255 2.50946C19.9731 2.50946 21.4708 4.00719 21.4708 5.85472V12.0474C21.4708 13.895 19.9731 15.3927 18.1255 15.3927C16.278 15.3927 14.7803 13.895 14.7803 12.0474V5.67551Z" fill="url(#paint16_radial_20020_3118)"/>
        <path d="M14.7803 5.67551C14.7803 3.82798 16.278 2.50946 18.1255 2.50946C19.9731 2.50946 21.4708 4.00719 21.4708 5.85472V12.0474C21.4708 13.895 19.9731 15.3927 18.1255 15.3927C16.278 15.3927 14.7803 13.895 14.7803 12.0474V5.67551Z" fill="url(#paint17_radial_20020_3118)"/>
        <path d="M19.1012 10.1359C17.2427 10.1359 15.7361 11.6425 15.7361 13.501C15.7361 15.3596 17.2427 16.8662 19.1012 16.8662H21.5616C22.6661 16.8662 23.5616 17.7616 23.5616 18.8662V21.8642H23.7498C27.0263 21.8642 28.7188 18.843 28.7188 16.0987C28.7188 12.8055 26.0492 10.1359 22.756 10.1359H19.1012Z" fill="url(#paint18_radial_20020_3118)"/>
        <path d="M19.1012 10.1359C17.2427 10.1359 15.7361 11.6425 15.7361 13.501C15.7361 15.3596 17.2427 16.8662 19.1012 16.8662H21.5616C22.6661 16.8662 23.5616 17.7616 23.5616 18.8662V21.8642H23.7498C27.0263 21.8642 28.7188 18.843 28.7188 16.0987C28.7188 12.8055 26.0492 10.1359 22.756 10.1359H19.1012Z" fill="url(#paint19_radial_20020_3118)"/>
        <path d="M19.1012 10.1359C17.2427 10.1359 15.7361 11.6425 15.7361 13.501C15.7361 15.3596 17.2427 16.8662 19.1012 16.8662H21.5616C22.6661 16.8662 23.5616 17.7616 23.5616 18.8662V21.8642H23.7498C27.0263 21.8642 28.7188 18.843 28.7188 16.0987C28.7188 12.8055 26.0492 10.1359 22.756 10.1359H19.1012Z" fill="url(#paint20_radial_20020_3118)"/>
        <path d="M19.1012 10.1359C17.2427 10.1359 15.7361 11.6425 15.7361 13.501C15.7361 15.3596 17.2427 16.8662 19.1012 16.8662H21.5616C22.6661 16.8662 23.5616 17.7616 23.5616 18.8662V21.8642H23.7498C27.0263 21.8642 28.7188 18.843 28.7188 16.0987C28.7188 12.8055 26.0492 10.1359 22.756 10.1359H19.1012Z" fill="url(#paint21_radial_20020_3118)"/>
        <g filter="url(#filter3_f_20020_3118)">
        <path d="M19.8279 12.2501H22.1529C25.6148 12.1187 27.2644 13.2608 27.8228 15.3927" stroke="url(#paint22_linear_20020_3118)" stroke-width="2" stroke-linecap="round"/>
        </g>
        <defs>
        <filter id="filter0_i_20020_3118" x="3.48999" y="9.47876" width="25.02" height="20.8282" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.584314 0 0 0 0 0.305882 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_20020_3118"/>
        </filter>
        <filter id="filter1_f_20020_3118" x="7.28008" y="9.90277" width="18.6777" height="12.1945" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_20020_3118"/>
        </filter>
        <filter id="filter2_f_20020_3118" x="3.21049" y="3.06519" width="24.6529" height="14.9349" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_20020_3118"/>
        </filter>
        <filter id="filter3_f_20020_3118" x="17.1279" y="9.53987" width="13.3952" height="8.55308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.85" result="effect1_foregroundBlur_20020_3118"/>
        </filter>
        <radialGradient id="paint0_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 17.5159) rotate(90) scale(14.3034 15.1439)">
        <stop stop-color="#FDAD36"/>
        <stop offset="1" stop-color="#FFBD33"/>
        </radialGradient>
        <linearGradient id="paint1_linear_20020_3118" x1="20.3932" y1="17.2406" x2="8.57055" y2="21.1964" gradientUnits="userSpaceOnUse">
        <stop stop-color="#CC6E17"/>
        <stop offset="1" stop-color="#CC6E17" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint2_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.14947 8.76191) rotate(180) scale(4.65948 9.31895)">
        <stop stop-color="#FFC734"/>
        <stop offset="1" stop-color="#EF9C2E"/>
        </radialGradient>
        <radialGradient id="paint3_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.14947 8.12472) rotate(107.103) scale(7.31258 6.34489)">
        <stop offset="0.629057" stop-color="#E7803A" stop-opacity="0"/>
        <stop offset="1" stop-color="#E7803A"/>
        </radialGradient>
        <radialGradient id="paint4_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.66313 10.1259) rotate(-180) scale(1.67954 10.0187)">
        <stop offset="0.413043" stop-color="#BD7209"/>
        <stop offset="1" stop-color="#BD7209" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint5_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.20248 5.5311) rotate(53.0969) scale(2.0452 3.9927)">
        <stop stop-color="#CEA142"/>
        <stop offset="1" stop-color="#CEA142" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint6_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.4063 7.83274) rotate(180) scale(5.39944 14.5141)">
        <stop stop-color="#FFD738"/>
        <stop offset="1" stop-color="#EF9C2E"/>
        </radialGradient>
        <radialGradient id="paint7_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.8194 6.75615) rotate(98.0732) scale(8.90071 6.88498)">
        <stop offset="0.629057" stop-color="#E7803A" stop-opacity="0"/>
        <stop offset="1" stop-color="#E7803A"/>
        </radialGradient>
        <radialGradient id="paint8_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.1944 9.39411) rotate(180) scale(1.09375 12.5748)">
        <stop offset="0.342857" stop-color="#BD7209"/>
        <stop offset="1" stop-color="#BD7209" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint9_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.45933 4.13439) rotate(56.736) scale(2.23897 4.17494)">
        <stop stop-color="#CEA142"/>
        <stop offset="1" stop-color="#CEA142" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint10_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.6922 6.92114) rotate(-180) scale(3.80251 9.85624)">
        <stop stop-color="#FFE744"/>
        <stop offset="1" stop-color="#E7AF1D"/>
        </radialGradient>
        <radialGradient id="paint11_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.1053 5.7995) rotate(97.753) scale(9.26599 6.89033)">
        <stop offset="0.629057" stop-color="#E7803A" stop-opacity="0"/>
        <stop offset="1" stop-color="#E7803A"/>
        </radialGradient>
        <radialGradient id="paint12_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.2282 8.54785) scale(1.76987 21.1996)">
        <stop offset="0.37931" stop-color="#BD7209"/>
        <stop offset="1" stop-color="#BD7209" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint13_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.7452 3.06802) rotate(57.8043) scale(2.30488 4.22527)">
        <stop stop-color="#CEA142"/>
        <stop offset="1" stop-color="#CEA142" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint14_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.3714 7.1896) rotate(179.148) scale(4.59167 13.079)">
        <stop stop-color="#FFE744"/>
        <stop offset="1" stop-color="#E19614"/>
        </radialGradient>
        <radialGradient id="paint15_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.7931 5.97504) rotate(97.0622) scale(10.0179 6.79995)">
        <stop offset="0.629057" stop-color="#E7803A" stop-opacity="0"/>
        <stop offset="1" stop-color="#E7803A"/>
        </radialGradient>
        <radialGradient id="paint16_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.3634 14.8792) rotate(-102.362) scale(5.39866 5.32663)">
        <stop stop-color="#DA7621"/>
        <stop offset="1" stop-color="#DA7621" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint17_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.4823 3.01727) rotate(60.1902) scale(2.43413 4.26884)">
        <stop stop-color="#CEA142"/>
        <stop offset="1" stop-color="#CEA142" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint18_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.1155 11.3543) rotate(99.9558) scale(7.04431 13.0548)">
        <stop stop-color="#FFDF40"/>
        <stop offset="1" stop-color="#F2B02C"/>
        </radialGradient>
        <radialGradient id="paint19_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.5171 17.8865) rotate(90) scale(2.77179 6.0673)">
        <stop offset="0.411881" stop-color="#EC7E4B"/>
        <stop offset="1" stop-color="#EE8350" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint20_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.6024 21.8642) rotate(-55.729) scale(3.47356 3.84509)">
        <stop stop-color="#FFB735"/>
        <stop offset="1" stop-color="#FFB735" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint21_radial_20020_3118" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.2248 13.6055) scale(3.54293 5.4251)">
        <stop stop-color="#F0A92E"/>
        <stop offset="1" stop-color="#F0A92E" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="paint22_linear_20020_3118" x1="19.8279" y1="12.402" x2="31.896" y2="16.6831" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFDE43"/>
        <stop offset="1" stop-color="#FFDE43" stop-opacity="0"/>
        </linearGradient>
        </defs>
        </svg>
        `,
        `
        <svg x="-38" y="-30" width="66" height="66" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_20020_2056)">
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="#FFBB44"/>
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="url(#paint0_radial_20020_2056)"/>
        </g>
        <g filter="url(#filter1_f_20020_2056)">
        <path d="M9.6505 14.2493C9.6505 12.4186 10.5821 11.8049 11.7312 11.8049C12.8804 11.8049 13.812 12.6833 13.812 14.2493V16.2131C13.812 17.5631 12.8804 18.483 11.7312 18.483C10.5821 18.483 9.6505 17.5631 9.6505 16.2131V14.2493Z" fill="#CD6322"/>
        <path d="M7.10144 14.1754C7.10144 12.4 8.00484 11.8049 9.11924 11.8049C10.2336 11.8049 11.137 12.6567 11.137 14.1754V16.0798C11.137 17.3889 10.2336 18.281 9.11924 18.281C8.00484 18.281 7.10144 17.3889 7.10144 16.0798V14.1754Z" fill="#CD6322"/>
        </g>
        <path d="M5.93134 13.3682C5.93134 11.5189 7.13457 10.5703 8.61884 10.5703C10.1031 10.5703 11.0407 11.823 11.0407 13.3682V15.6161C11.0407 17.1614 10.1031 18.0625 8.61884 18.0625C7.13457 18.0625 5.93134 17.1614 5.93134 15.6161V13.3682Z" fill="url(#paint1_radial_20020_2056)"/>
        <path d="M5.93134 13.3682C5.93134 11.5189 7.13457 10.5703 8.61884 10.5703C10.1031 10.5703 11.0407 11.823 11.0407 13.3682V15.6161C11.0407 17.1614 10.1031 18.0625 8.61884 18.0625C7.13457 18.0625 5.93134 17.1614 5.93134 15.6161V13.3682Z" fill="url(#paint2_radial_20020_2056)"/>
        <path d="M5.93134 13.3682C5.93134 11.5189 7.13457 10.5703 8.61884 10.5703C10.1031 10.5703 11.0407 11.823 11.0407 13.3682V15.6161C11.0407 17.1614 10.1031 18.0625 8.61884 18.0625C7.13457 18.0625 5.93134 17.1614 5.93134 15.6161V13.3682Z" fill="url(#paint3_radial_20020_2056)"/>
        <path d="M5.93134 13.3682C5.93134 11.5189 7.13457 10.5703 8.61884 10.5703C10.1031 10.5703 11.0407 11.823 11.0407 13.3682V15.6161C11.0407 17.1614 10.1031 18.0625 8.61884 18.0625C7.13457 18.0625 5.93134 17.1614 5.93134 15.6161V13.3682Z" fill="url(#paint4_linear_20020_2056)"/>
        <path d="M10.0075 12.6898C10.0075 10.3125 11.2172 9.51562 12.7094 9.51562C14.2017 9.51562 15.4114 10.6562 15.4114 12.6898V15.2399C15.4114 16.993 14.2017 18.1875 12.7094 18.1875C11.2172 18.1875 10.0075 16.993 10.0075 15.2399V12.6898Z" fill="url(#paint5_radial_20020_2056)"/>
        <path d="M10.0075 12.6898C10.0075 10.3125 11.2172 9.51562 12.7094 9.51562C14.2017 9.51562 15.4114 10.6562 15.4114 12.6898V15.2399C15.4114 16.993 14.2017 18.1875 12.7094 18.1875C11.2172 18.1875 10.0075 16.993 10.0075 15.2399V12.6898Z" fill="url(#paint6_radial_20020_2056)"/>
        <path d="M10.0075 12.6898C10.0075 10.3125 11.2172 9.51562 12.7094 9.51562C14.2017 9.51562 15.4114 10.6562 15.4114 12.6898V15.2399C15.4114 16.993 14.2017 18.1875 12.7094 18.1875C11.2172 18.1875 10.0075 16.993 10.0075 15.2399V12.6898Z" fill="url(#paint7_radial_20020_2056)"/>
        <g filter="url(#filter2_f_20020_2056)">
        <path d="M17.1973 21.8726C19.0859 21.8726 21.2423 21.8293 21.7234 23.9658C22.1737 25.965 24.0469 24.4669 23.5886 21.8726C23.0103 18.5991 20.4512 17.0366 17.1973 17.174C15.4714 17.2469 14.9806 18.6873 14.9806 19.408C14.9806 20.1286 15.3087 21.8726 17.1973 21.8726Z" fill="#EB872F"/>
        </g>
        <path d="M18.0876 20.8281C20.1376 20.8281 21.2515 22.5124 21.7738 24.8286C22.2625 26.9959 25.5226 23.6406 25.0251 20.8281C24.3975 17.2793 21.6196 15.5854 18.0876 15.7344C16.2142 15.8134 15.6814 17.375 15.6814 18.1562C15.6814 18.9375 16.0376 20.8281 18.0876 20.8281Z" fill="#FFBB44"/>
        <path d="M18.0876 20.8281C20.1376 20.8281 21.2515 22.5124 21.7738 24.8286C22.2625 26.9959 25.5226 23.6406 25.0251 20.8281C24.3975 17.2793 21.6196 15.5854 18.0876 15.7344C16.2142 15.8134 15.6814 17.375 15.6814 18.1562C15.6814 18.9375 16.0376 20.8281 18.0876 20.8281Z" fill="url(#paint8_radial_20020_2056)"/>
        <path d="M18.0876 20.8281C20.1376 20.8281 21.2515 22.5124 21.7738 24.8286C22.2625 26.9959 25.5226 23.6406 25.0251 20.8281C24.3975 17.2793 21.6196 15.5854 18.0876 15.7344C16.2142 15.8134 15.6814 17.375 15.6814 18.1562C15.6814 18.9375 16.0376 20.8281 18.0876 20.8281Z" fill="url(#paint9_radial_20020_2056)"/>
        <path d="M18.0876 20.8281C20.1376 20.8281 21.2515 22.5124 21.7738 24.8286C22.2625 26.9959 25.5226 23.6406 25.0251 20.8281C24.3975 17.2793 21.6196 15.5854 18.0876 15.7344C16.2142 15.8134 15.6814 17.375 15.6814 18.1562C15.6814 18.9375 16.0376 20.8281 18.0876 20.8281Z" fill="url(#paint10_radial_20020_2056)"/>
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="url(#paint11_radial_20020_2056)"/>
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="url(#paint12_radial_20020_2056)"/>
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="url(#paint13_radial_20020_2056)"/>
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="url(#paint14_radial_20020_2056)"/>
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="url(#paint15_radial_20020_2056)"/>
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="url(#paint16_radial_20020_2056)"/>
        <path d="M14.7595 16.0547L5.93457 15.4214C5.93457 15.4214 5.93456 19.0174 6.30638 22.0313C7.08763 27.1875 10.8889 29.9063 15.0095 29.9063C22.697 29.9063 25.5112 24.0003 25.1356 19.9509C24.7601 15.9014 24.6513 15.1173 25.1356 13.7579L26.9845 8.07959C27.297 7.23584 27.4049 5.30211 25.4049 4.62711C23.4049 3.95211 22.3525 5.61099 22.0661 6.39224L20.1633 12.0586C19.9836 12.3477 19.7649 12.1446 19.7649 12.0039C19.6711 10.2748 19.4778 6.34588 19.2778 4.34588C19.0891 2.45895 17.3348 1.97529 16.5014 2.0482C14.7764 2.1732 14.0419 3.82923 14.12 4.57924L14.7595 16.0547Z" fill="url(#paint17_radial_20020_2056)"/>
        <g filter="url(#filter3_f_20020_2056)">
        <path d="M17.5753 3.6593L18.4369 12.9763" stroke="#FFE746" stroke-width="1.5" stroke-linecap="round"/>
        </g>
        <g filter="url(#filter4_f_20020_2056)">
        <path d="M25.8544 6.73914L22.8793 14.8603" stroke="#FFE746" stroke-linecap="round"/>
        </g>
        <g filter="url(#filter5_f_20020_2056)">
        <path d="M18.6178 17.0714C19.9847 16.9776 22.9276 17.6102 23.7638 20.8908" stroke="url(#paint18_linear_20020_2056)" stroke-linecap="round"/>
        </g>
        <defs>
        <filter id="filter0_i_20020_2056" x="5.93457" y="1.04126" width="21.7249" height="28.865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.5" dy="-1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.501961 0 0 0 0 0.443137 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_20020_2056"/>
        </filter>
        <filter id="filter1_f_20020_2056" x="6.10144" y="10.8049" width="8.71051" height="8.67804" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_20020_2056"/>
        </filter>
        <filter id="filter2_f_20020_2056" x="13.9806" y="16.1656" width="10.6797" height="9.72369" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_20020_2056"/>
        </filter>
        <filter id="filter3_f_20020_2056" x="14.8252" y="0.909241" width="6.36179" height="14.8171" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_20020_2056"/>
        </filter>
        <filter id="filter4_f_20020_2056" x="20.3792" y="4.23901" width="7.97534" height="13.1214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_20020_2056"/>
        </filter>
        <filter id="filter5_f_20020_2056" x="16.6177" y="15.0628" width="9.14621" height="7.82812" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.75" result="effect1_foregroundBlur_20020_2056"/>
        </filter>
        <radialGradient id="paint0_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.43484 20.6875) scale(6.46875 17.6975)">
        <stop stop-color="#FFBF36"/>
        <stop offset="1" stop-color="#FFC736" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint1_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.29226 14.5553) rotate(-180) scale(2.40393 8.45019)">
        <stop stop-color="#FFD237"/>
        <stop offset="1" stop-color="#FFBA32"/>
        </radialGradient>
        <radialGradient id="paint2_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.59282 15.8417) rotate(-117.91) scale(5.9652 9.82892)">
        <stop offset="0.663957" stop-color="#F2AF43" stop-opacity="0"/>
        <stop offset="0.96714" stop-color="#F2AF43"/>
        </radialGradient>
        <radialGradient id="paint3_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.48602 10.7813) rotate(90) scale(7.59375 6.05121)">
        <stop offset="0.773663" stop-color="#F58E33" stop-opacity="0"/>
        <stop offset="1" stop-color="#F58E33"/>
        </radialGradient>
        <linearGradient id="paint4_linear_20020_2056" x1="10.8535" y1="14.3164" x2="9.5067" y2="14.3164" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C3832A"/>
        <stop offset="1" stop-color="#C3832A" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint5_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.9674 13.2894) rotate(-180) scale(4.39249 12.4392)">
        <stop stop-color="#FFE73F"/>
        <stop offset="1" stop-color="#EDA220"/>
        </radialGradient>
        <radialGradient id="paint6_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.8072 14.8939) rotate(-119.055) scale(5.8514 5.77771)">
        <stop offset="0.689644" stop-color="#DE9E44" stop-opacity="0"/>
        <stop offset="1" stop-color="#DE9E44"/>
        </radialGradient>
        <radialGradient id="paint7_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.0815 9.93043) rotate(104.21) scale(8.87186 6.46006)">
        <stop offset="0.733339" stop-color="#E9823B" stop-opacity="0"/>
        <stop offset="1" stop-color="#E9823B"/>
        </radialGradient>
        <radialGradient id="paint8_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.5109 24.5229) rotate(-49.8521) scale(7.96002 8.4958)">
        <stop offset="0.601618" stop-color="#FFE444" stop-opacity="0"/>
        <stop offset="1" stop-color="#FFE444"/>
        </radialGradient>
        <radialGradient id="paint9_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.9634 22.5849) rotate(-68.4782) scale(3.85889 5.4738)">
        <stop offset="0.413677" stop-color="#F5863B"/>
        <stop offset="1" stop-color="#F5863B" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint10_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.0348 17.1529) rotate(28.6731) scale(3.44555 5.76373)">
        <stop stop-color="#EEAE11"/>
        <stop offset="1" stop-color="#EEAE11" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint11_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.2571 19.4928) rotate(0.261624) scale(23.5889 29.0645)">
        <stop offset="0.867121" stop-color="#FFC53B" stop-opacity="0"/>
        <stop offset="1" stop-color="#FFC53B"/>
        </radialGradient>
        <radialGradient id="paint12_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.284 15.9738) rotate(135.311) scale(6.40921 7.03808)">
        <stop stop-color="#FFD131"/>
        <stop offset="1" stop-color="#FFD131" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint13_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.1067 10.1562) rotate(96.5463) scale(3.83752 0.631104)">
        <stop offset="0.498573" stop-color="#CD9028"/>
        <stop offset="1" stop-color="#CD9028" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint14_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.6793 2.68991) rotate(119.168) scale(2.65206 3.01843)">
        <stop stop-color="#FFE847"/>
        <stop offset="1" stop-color="#FFE847" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint15_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.6848 7.34373) rotate(17.5255) scale(1.2453 7.96587)">
        <stop stop-color="#D19532"/>
        <stop offset="1" stop-color="#D19532" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint16_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23.5226 4.52789) rotate(67.8905) scale(1.38863 2.14289)">
        <stop stop-color="#D3AE52"/>
        <stop offset="1" stop-color="#D3AE52" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint17_radial_20020_2056" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.5691 5.30189) rotate(132.709) scale(2.85839 3.24493)">
        <stop stop-color="#FFE847"/>
        <stop offset="1" stop-color="#FFE847" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="paint18_linear_20020_2056" x1="18.8992" y1="17.0628" x2="24.0453" y2="20.4083" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFE746"/>
        <stop offset="1" stop-color="#FFE746" stop-opacity="0"/>
        </linearGradient>
        </defs>
        </svg>
        `,
        `
        <svg x="-38" y="-30" width="66" height="66" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="#FFC23E"/>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint0_radial_20020_1463)"/>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint1_radial_20020_1463)"/>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint2_radial_20020_1463)"/>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint3_radial_20020_1463)"/>
        <path d="M4.88618 14.1288L4.69855 9.70814C4.64413 8.42614 5.63553 7.34098 6.91721 7.27963C7.64881 7.24462 8.31779 7.55061 8.77012 8.05767L8.76985 8.04937C8.94862 8.28624 9.22215 8.79267 9.26585 9.54534C9.3221 10.5141 9.43512 12.9125 9.4846 13.9907L4.88618 14.1288Z" fill="url(#paint4_linear_20020_1463)"/>
        <path d="M4.88618 14.1288L4.69855 9.70814C4.64413 8.42614 5.63553 7.34098 6.91721 7.27963C7.64881 7.24462 8.31779 7.55061 8.77012 8.05767L8.76985 8.04937C8.94862 8.28624 9.22215 8.79267 9.26585 9.54534C9.3221 10.5141 9.43512 12.9125 9.4846 13.9907L4.88618 14.1288Z" fill="url(#paint5_linear_20020_1463)"/>
        <path d="M4.88618 14.1288L4.69855 9.70814C4.64413 8.42614 5.63553 7.34098 6.91721 7.27963C7.64881 7.24462 8.31779 7.55061 8.77012 8.05767L8.76985 8.04937C8.94862 8.28624 9.22215 8.79267 9.26585 9.54534C9.3221 10.5141 9.43512 12.9125 9.4846 13.9907L4.88618 14.1288Z" fill="url(#paint6_radial_20020_1463)"/>
        <g filter="url(#filter0_f_20020_1463)">
        <path d="M7.66431 9.45157C7.56397 8.38126 7.02368 8.15472 6.57056 8.15472C7.78931 7.62347 8.69556 8.34222 8.78931 9.45157L9.17993 14.6391L7.22681 16.561L7.99243 14.3735C7.99243 13.1443 7.75806 10.4516 7.66431 9.45157Z" fill="#FFD93F"/>
        </g>
        <path d="M8.76989 8.04935C8.94867 8.28623 9.22219 8.79266 9.2659 9.54533C9.3007 10.1447 9.49703 13.4683 9.60837 15.1882L13.7863 14.016L13.343 7.13551C13.3258 6.50432 13.3317 5.85052 13.0156 5.28348C12.5817 4.62782 11.8275 4.20615 10.9841 4.23437C9.69218 4.27759 8.67992 5.35993 8.72314 6.65184L8.76989 8.04935Z" fill="url(#paint7_linear_20020_1463)"/>
        <path d="M8.76989 8.04935C8.94867 8.28623 9.22219 8.79266 9.2659 9.54533C9.3007 10.1447 9.49703 13.4683 9.60837 15.1882L13.7863 14.016L13.343 7.13551C13.3258 6.50432 13.3317 5.85052 13.0156 5.28348C12.5817 4.62782 11.8275 4.20615 10.9841 4.23437C9.69218 4.27759 8.67992 5.35993 8.72314 6.65184L8.76989 8.04935Z" fill="url(#paint8_linear_20020_1463)"/>
        <path d="M8.76989 8.04935C8.94867 8.28623 9.22219 8.79266 9.2659 9.54533C9.3007 10.1447 9.49703 13.4683 9.60837 15.1882L13.7863 14.016L13.343 7.13551C13.3258 6.50432 13.3317 5.85052 13.0156 5.28348C12.5817 4.62782 11.8275 4.20615 10.9841 4.23437C9.69218 4.27759 8.67992 5.35993 8.72314 6.65184L8.76989 8.04935Z" fill="url(#paint9_linear_20020_1463)"/>
        <path d="M8.76989 8.04935C8.94867 8.28623 9.22219 8.79266 9.2659 9.54533C9.3007 10.1447 9.49703 13.4683 9.60837 15.1882L13.7863 14.016L13.343 7.13551C13.3258 6.50432 13.3317 5.85052 13.0156 5.28348C12.5817 4.62782 11.8275 4.20615 10.9841 4.23437C9.69218 4.27759 8.67992 5.35993 8.72314 6.65184L8.76989 8.04935Z" fill="url(#paint10_radial_20020_1463)"/>
        <g filter="url(#filter1_f_20020_1463)">
        <path d="M11.6619 6.26553C11.5615 5.19522 11.0212 4.96868 10.5681 4.96868C11.7869 4.43744 12.6931 5.15619 12.7869 6.26553L13.2152 12.934L11.2014 13.8657L11.7771 12.591C11.9523 12.2029 12.0442 11.783 12.0271 11.3576C11.9656 9.83119 11.7424 7.12415 11.6619 6.26553Z" fill="#FFD141"/>
        </g>
        <path d="M17.5836 6.28396C17.5836 5.82663 17.7502 5.42038 17.8479 5.3071L17.8485 5.30358L17.8258 4.33921C17.7945 3.00549 16.6878 1.94976 15.3541 1.98115C14.0204 2.01255 12.9646 3.11919 12.996 4.4529L13.0156 5.28351C13.3102 5.8121 13.3251 6.41609 13.3397 7.00686C13.3844 8.81726 13.6104 11.1793 13.7268 12.9866C15.1643 12.9866 16.3987 12.9866 17.4634 12.9866C17.4884 11.0205 17.5836 6.92816 17.5836 6.28396Z" fill="url(#paint11_linear_20020_1463)"/>
        <path d="M17.5836 6.28396C17.5836 5.82663 17.7502 5.42038 17.8479 5.3071L17.8485 5.30358L17.8258 4.33921C17.7945 3.00549 16.6878 1.94976 15.3541 1.98115C14.0204 2.01255 12.9646 3.11919 12.996 4.4529L13.0156 5.28351C13.3102 5.8121 13.3251 6.41609 13.3397 7.00686C13.3844 8.81726 13.6104 11.1793 13.7268 12.9866C15.1643 12.9866 16.3987 12.9866 17.4634 12.9866C17.4884 11.0205 17.5836 6.92816 17.5836 6.28396Z" fill="url(#paint12_linear_20020_1463)"/>
        <path d="M17.5836 6.28396C17.5836 5.82663 17.7502 5.42038 17.8479 5.3071L17.8485 5.30358L17.8258 4.33921C17.7945 3.00549 16.6878 1.94976 15.3541 1.98115C14.0204 2.01255 12.9646 3.11919 12.996 4.4529L13.0156 5.28351C13.3102 5.8121 13.3251 6.41609 13.3397 7.00686C13.3844 8.81726 13.6104 11.1793 13.7268 12.9866C15.1643 12.9866 16.3987 12.9866 17.4634 12.9866C17.4884 11.0205 17.5836 6.92816 17.5836 6.28396Z" fill="url(#paint13_linear_20020_1463)"/>
        <path d="M17.5836 6.28396C17.5836 5.82663 17.7502 5.42038 17.8479 5.3071L17.8485 5.30358L17.8258 4.33921C17.7945 3.00549 16.6878 1.94976 15.3541 1.98115C14.0204 2.01255 12.9646 3.11919 12.996 4.4529L13.0156 5.28351C13.3102 5.8121 13.3251 6.41609 13.3397 7.00686C13.3844 8.81726 13.6104 11.1793 13.7268 12.9866C15.1643 12.9866 16.3987 12.9866 17.4634 12.9866C17.4884 11.0205 17.5836 6.92816 17.5836 6.28396Z" fill="url(#paint14_radial_20020_1463)"/>
        <g filter="url(#filter2_f_20020_1463)">
        <path d="M15.7989 3.00775V13.1177H17.0017C17.0559 10.9938 17.1642 6.36905 17.1642 4.86069C17.1642 3.35233 16.254 2.99691 15.7989 3.00775Z" fill="#FFD140"/>
        </g>
        <path d="M17.8479 5.30704C17.7502 5.42033 17.5835 5.82658 17.5835 6.2839C17.5835 8.88971 17.4633 10.804 17.4633 13.4102L22.0941 16.726L22.0941 14.8247L22.3496 6.57158C22.3908 5.24147 21.3447 4.1304 20.0146 4.09139C19.0915 4.06432 18.2745 4.56071 17.8487 5.31202L17.8485 5.30501L17.8479 5.30704Z" fill="url(#paint15_linear_20020_1463)"/>
        <path d="M17.8479 5.30704C17.7502 5.42033 17.5835 5.82658 17.5835 6.2839C17.5835 8.88971 17.4633 10.804 17.4633 13.4102L22.0941 16.726L22.0941 14.8247L22.3496 6.57158C22.3908 5.24147 21.3447 4.1304 20.0146 4.09139C19.0915 4.06432 18.2745 4.56071 17.8487 5.31202L17.8485 5.30501L17.8479 5.30704Z" fill="url(#paint16_linear_20020_1463)"/>
        <path d="M17.8479 5.30704C17.7502 5.42033 17.5835 5.82658 17.5835 6.2839C17.5835 8.88971 17.4633 10.804 17.4633 13.4102L22.0941 16.726L22.0941 14.8247L22.3496 6.57158C22.3908 5.24147 21.3447 4.1304 20.0146 4.09139C19.0915 4.06432 18.2745 4.56071 17.8487 5.31202L17.8485 5.30501L17.8479 5.30704Z" fill="url(#paint17_radial_20020_1463)"/>
        <g filter="url(#filter3_f_20020_1463)">
        <path d="M20.4326 5.0783V15.1882H21.6353C21.6895 13.0644 21.7979 8.4396 21.7979 6.93124C21.7979 5.42288 20.8877 5.06747 20.4326 5.0783Z" fill="#FFDD3B"/>
        </g>
        <path d="M22.2186 14.6721L23.5444 13.0273C24.4156 11.9466 25.9974 11.7754 27.0796 12.6448C28.1643 13.5163 28.3359 15.1026 27.4627 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.19 22.2724 22.8131 22.9529 22.4417 23.6363C19.2841 21.9485 19.7446 18.7735 20.4475 17.2787L22.2186 14.6721Z" fill="url(#paint18_radial_20020_1463)"/>
        <g filter="url(#filter4_f_20020_1463)">
        <path d="M12.5156 13.5728C16.1565 12.5976 20.9351 14.4288 21.5853 15.3607V17.4412C19.3097 14.6781 15.5714 13.8654 12.5156 13.5728Z" fill="url(#paint19_linear_20020_1463)"/>
        </g>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint20_radial_20020_1463)"/>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint21_radial_20020_1463)"/>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint22_radial_20020_1463)"/>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint23_radial_20020_1463)"/>
        <path d="M12.996 4.4529C12.9646 3.11919 14.0204 2.01255 15.3541 1.98115C16.6878 1.94976 17.7944 3.00549 17.8258 4.33921L17.8487 5.31207C18.2745 4.56077 19.0915 4.06437 20.0146 4.09144C21.3448 4.13045 22.3908 5.24153 22.3496 6.57164L22.0941 14.8266L23.5444 13.0274C24.4156 11.9466 25.9974 11.7754 27.0796 12.6449C28.1643 13.5163 28.336 15.1026 27.4628 16.1858L26.8398 16.9587L26.8337 16.9676C26.261 17.7011 25.0885 19.2029 23.6174 21.6313C23.1429 22.3431 22.7306 23.1034 22.3191 23.8624C21.7322 24.9447 21.1468 26.0243 20.3844 26.9566C18.869 28.8252 16.5545 30.0196 13.9612 30.0196C10.8163 30.0196 8.08165 28.2633 6.68456 25.678L6.67991 25.686C5.40648 23.4048 5.21898 20.8813 5.15648 19.5298L5.01936 17.0879C5.01168 17.0252 5.00643 16.9618 5.0037 16.8975L4.69855 9.70818C4.64413 8.42618 5.63553 7.34102 6.91721 7.27967C7.64881 7.24465 8.31779 7.55065 8.77012 8.05771L8.72309 6.65189C8.67987 5.35997 9.69214 4.27763 10.9841 4.23441C11.8275 4.20619 12.5816 4.62787 13.0156 5.28353L12.996 4.4529Z" fill="url(#paint24_radial_20020_1463)" fill-opacity="0.6"/>
        <defs>
        <filter id="filter0_f_20020_1463" x="5.57056" y="6.97607" width="4.60938" height="10.5849" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_20020_1463"/>
        </filter>
        <filter id="filter1_f_20020_1463" x="9.56812" y="3.79004" width="4.64703" height="11.0757" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_20020_1463"/>
        </filter>
        <filter id="filter2_f_20020_1463" x="14.7989" y="2.00751" width="3.3653" height="12.1102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_20020_1463"/>
        </filter>
        <filter id="filter3_f_20020_1463" x="19.4326" y="4.07806" width="3.3653" height="12.1102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_20020_1463"/>
        </filter>
        <filter id="filter4_f_20020_1463" x="11.5156" y="12.2948" width="11.0696" height="6.14642" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_20020_1463"/>
        </filter>
        <radialGradient id="paint0_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.5308 17.4334) rotate(161.732) scale(21.3518 32.5551)">
        <stop offset="0.817521" stop-color="#E99329" stop-opacity="0"/>
        <stop offset="1" stop-color="#E99329"/>
        </radialGradient>
        <radialGradient id="paint1_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.7202 7.81418) rotate(103.505) scale(24.9036 17.1915)">
        <stop offset="0.750766" stop-color="#F88456" stop-opacity="0"/>
        <stop offset="1" stop-color="#F88456"/>
        </radialGradient>
        <radialGradient id="paint2_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.3582 7.811) rotate(98.2119) scale(22.9382 15.8347)">
        <stop offset="0.937186" stop-color="#F27A74" stop-opacity="0"/>
        <stop offset="1" stop-color="#F27A74"/>
        </radialGradient>
        <radialGradient id="paint3_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.5705 18.0298) rotate(-144.583) scale(1.72555 7.38422)">
        <stop stop-color="#F6B44B"/>
        <stop offset="1" stop-color="#F6B44B" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="paint4_linear_20020_1463" x1="9.4846" y1="10.936" x2="8.16429" y2="11.1235" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E79F08"/>
        <stop offset="1" stop-color="#E79F08" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint5_linear_20020_1463" x1="9.66429" y1="14.1288" x2="8.28929" y2="13.3422" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFC23E"/>
        <stop offset="1" stop-color="#FFC23E" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint6_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.00804 7.0766) rotate(87.8255) scale(2.17344 5.42725)">
        <stop stop-color="#E8AD3C"/>
        <stop offset="1" stop-color="#E8AD3C" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="paint7_linear_20020_1463" x1="13.7268" y1="9.31096" x2="12.4143" y2="9.40471" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E79F08"/>
        <stop offset="1" stop-color="#E79F08" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint8_linear_20020_1463" x1="8.7218" y1="10.289" x2="11.1189" y2="10.1687" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DF8F0D"/>
        <stop offset="1" stop-color="#DF8F0D" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint9_linear_20020_1463" x1="11.254" y1="14.8876" x2="10.3598" y2="11.5814" gradientUnits="userSpaceOnUse">
        <stop offset="0.405208" stop-color="#FFC23E"/>
        <stop offset="1" stop-color="#FFC23E" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint10_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.4199 3.73659) rotate(77.9639) scale(3.35183 5.94373)">
        <stop stop-color="#E1AE3F"/>
        <stop offset="1" stop-color="#E8AD3C" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="paint11_linear_20020_1463" x1="13.3265" y1="8.13318" x2="15.422" y2="8.02843" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E59714"/>
        <stop offset="1" stop-color="#E59714" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint12_linear_20020_1463" x1="17.6518" y1="8.40408" x2="16.8093" y2="8.39504" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E59714"/>
        <stop offset="1" stop-color="#E59714" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint13_linear_20020_1463" x1="15.422" y1="13.5538" x2="15.422" y2="11.747" gradientUnits="userSpaceOnUse">
        <stop offset="0.347826" stop-color="#FFC23E"/>
        <stop offset="1" stop-color="#FFC23E" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint14_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.1395 10.8747) rotate(-116.651) scale(9.71133 11.3986)">
        <stop offset="0.869582" stop-color="#D8A13D" stop-opacity="0"/>
        <stop offset="1" stop-color="#D8A13D"/>
        </radialGradient>
        <linearGradient id="paint15_linear_20020_1463" x1="17.2617" y1="10.4082" x2="19.9066" y2="10.5019" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E69717"/>
        <stop offset="1" stop-color="#E69717" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint16_linear_20020_1463" x1="18.6595" y1="14.3204" x2="19.5698" y2="12.565" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFC23E"/>
        <stop offset="1" stop-color="#FFC23E" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint17_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.6438 14.3014) rotate(-113.761) scale(10.8875 11.755)">
        <stop offset="0.869582" stop-color="#D8A13D" stop-opacity="0"/>
        <stop offset="1" stop-color="#D8A13D"/>
        </radialGradient>
        <radialGradient id="paint18_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.5315 13.4714) rotate(48.5035) scale(1.83532 7.02491)">
        <stop stop-color="#E7A30E"/>
        <stop offset="1" stop-color="#E7A30E" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="paint19_linear_20020_1463" x1="20.415" y1="15.8809" x2="8.35463" y2="13.8329" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFDD3B"/>
        <stop offset="1" stop-color="#FFDD3B" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="paint20_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.6071 13.4185) rotate(145.784) scale(2.39764 2.81036)">
        <stop stop-color="#FFE84A"/>
        <stop offset="1" stop-color="#FFE84A" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint21_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.9763 4.80052) rotate(130.365) scale(2.77561 2.99718)">
        <stop stop-color="#FFE84A"/>
        <stop offset="1" stop-color="#FFE84A" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint22_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5352 2.31557) rotate(112.533) scale(2.69033 2.84931)">
        <stop offset="0.32493" stop-color="#FFE84A"/>
        <stop offset="1" stop-color="#FFE84A" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint23_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.5872 5.85794) rotate(122.8) scale(1.41523 1.65613)">
        <stop stop-color="#FFD148"/>
        <stop offset="1" stop-color="#FFCF41" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint24_radial_20020_1463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.4632 8.92447) rotate(120.411) scale(1.41004 1.52259)">
        <stop stop-color="#FFE84A"/>
        <stop offset="1" stop-color="#FFE84A" stop-opacity="0"/>
        </radialGradient>
        </defs>
        </svg>
        `,
      ];
      return janken[Math.floor(Math.random() * janken.length)];
    case "default":
    default:
      return `
        <text x="-5" y="3" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="level-rank-icon">
          ${rankLevel}
        </text>
      `;
  }
};

export { icons, rankIcon };
export default icons;
