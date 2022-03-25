import * as React from 'react';

const Piotr = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={76}
      height={76}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip36)">
        <path
          d="M0 38C0 17.013 17.013 0 38 0s38 17.013 38 38-17.013 38-38 38S0 58.987 0 38z"
          fill="currentColor"
        />
        <g clipPath="url(#prefix__clip37)">
          <path
            d="M78.728 64.548c-.52-1.557-1.5-2.454-2.283-3.18-.208-.19-.41-.371-.592-.56-.99-1.003-2.085-2.046-3.613-2.864-2.742-1.468-5.796-2.005-8.689-2.429-.497-.073-.997-.144-1.5-.211-.87-.121-1.772-.245-2.639-.39a32.5 32.5 0 01-1.786-.338l-.181-.068c-.046-.924-.061-1.794.087-2.566.029-.147.068-.319.11-.507.18-.805.427-1.908.401-2.99a4.506 4.506 0 00-.53-2.13c.13-.634.063-1.262.015-1.73-.007-.064-.014-.12-.018-.17l-.01-.12a6.587 6.587 0 00-.251-1.54c.289-.38.6-.76.927-1.162 1.338-1.636 2.856-3.494 3.363-5.957.41-2.013-.026-3.578-1.307-4.654-.972-.817-2.22-1.135-3.426-1.443l-.284-.072c-.357-.093-.582-.187-.682-.906-.127-.954.157-2.351.31-3.098.117-.57.4-1.256.698-1.982.772-1.873 1.733-4.204.601-6.602-1.01-2.146-2.863-3.47-4.507-4.635a32.13 32.13 0 01-1.136-.83C49.858 9.901 48 8.463 45.101 7.53c-.383-.124-.763-.25-1.145-.376-.88-.29-1.789-.592-2.715-.859a14.31 14.31 0 01-.321-.095c-1.16-.346-3.57-1.069-5.59-1.069a5.951 5.951 0 00-1.969.292 3.368 3.368 0 00-.237-.008c-2.113 0-6.312 2.044-8.055 3.316-2.128.475-4.758 1.082-6.377 3.489a2.91 2.91 0 00-.35.708c-.058.098-.111.194-.16.283-.084.165-.18.323-.29.474l-.054.054-.05.059c-4.689 5.473-5.006 15.396-2.631 21.616.032.298.083.594.15.886a7.743 7.743 0 00-.445 1.584c-.387 2.223.121 4.455.728 6.535.031.109.062.23.093.358.157.626.35 1.403.818 2.066.662.925 1.636 1.206 2.217 1.375.098.027.21.06.261.08.052.02.137.056.212.09.125.055.272.116.422.178-.006.9 0 1.813.084 2.733.124 1.491.579 2.712 1.018 3.893.08.215.158.422.233.63-.136.049-.284.098-.436.148-.67.012-1.279.254-1.729.431-.076.03-.177.07-.23.089-.521.116-1.091.223-1.786.338-.869.144-1.773.272-2.64.39-.499.068-.999.138-1.5.21-2.892.425-5.946.955-8.688 2.43-1.528.818-2.623 1.865-3.613 2.863-.188.19-.384.37-.592.561-.785.723-1.762 1.622-2.283 3.18-.682 2.055-.517 4.15-.367 5.997.037.462.072.9.095 1.33.024.431.032.812.028 1.166v.288l.076.272c1.123 4.114 5.473 4.114 6.903 4.114.681 0 1.382-.032 2.056-.062.65-.03 1.263-.059 1.846-.059.835 0 1.456.063 1.897.19l.35.102.365-.026c.472-.033.968-.09 1.476-.17a14.735 14.735 0 003.987-1.162c.335-.018.666-.03.981-.04h.262c.13-.038.264-.066.4-.084 3.35-.435 6.739-.374 10.102-.136 3.125-.382 6.293-.137 9.434.031.308.016.611.087.895.207h4.587c3.387 0 6.157.011 8.47.033h.252c.299.076.606.115.915.116.18 0 .36-.015.538-.044.705.036 1.337.064 1.928.086 1.5.057 2.977.086 4.393.086.739 0 1.477-.007 2.199-.023 1.028.148 2.09.301 3.168.396.682.062 1.378.092 2.064.092 1.678-.002 3.35-.18 4.99-.535a2.64 2.64 0 00.337-.095c.286.015.593.026.908.026a8.955 8.955 0 002.454-.299 4.988 4.988 0 002.649-1.795c.954-1.26.917-2.388.89-3.296v-.136c-.004-.826.035-1.65.117-2.472.149-1.86.32-3.95-.368-6.011z"
            fill="#000"
          />
          <path
            d="M19.248 36.788c.214-.09.394-.213.442-.472.155-.842-.857-.942-1.376-.579-.692.484-1.035 1.555-1.171 2.34-.325 1.864.157 3.827.682 5.611.155.535.287 1.349.616 1.805.328.457 1.041.545 1.543.735.571.217 1.606.842 2.01.116.42-.758.01-2.665-.721-3.082-.89-.507-2.168-.666-1.721-2.104.262-.838 1.182-.913 1.872-1.217.301-.136.574-.241.717-.557.293-.645-.19-.731-.5-1.133-.435-.565-.302-1.016-1.132-1.148-.526-.084-1.187-.17-1.581.25-.74.79-.373 2.306-.72 3.271.024-.996-.472-2.59.25-3.428.19-.23.519-.293.79-.408z"
            fill="#fff"
          />
          <path
            d="M55.688 55.976c.446-.154 1.315.34 1.723.432.642.143 1.29.262 1.939.37 1.386.229 2.782.402 4.172.605 2.736.402 5.555.89 8.02 2.21 1.227.658 2.156 1.52 3.125 2.5.97.98 1.928 1.575 2.389 2.95.84 2.519.076 5.294.145 7.878.024.857.075 1.42-.474 2.149-.392.518-.947.89-1.575 1.06-1.299.367-2.88.182-4.206.095-.567-2.623-1.78-5.272-2.863-7.71-.255-.572-2.518-5.71-3.172-3.38-.195.694-.206 1.595-.136 2.304.066.682.279 1.424-.67 1.028-1.45-.608-1.614-2.727-3.172-2.931-1.477-.192-2.696 1.435-3.436 2.477-1.636 2.308-2.746 4.932-3.861 7.519-.136.314-.196.601-.481.746-.419.212-1.291 0-1.542-.401-.344-.545.098-1.069.458-1.456.619-.668.435-.588.174-1.363-.212-.631.018-1.363.073-2.031.069-.829.093-1.66.07-2.49-.021-.764-.054-1.573-.248-2.318-.409.163-.885.672-1.227.954-.177.147-.195.353-.439.423-.151.043-.238-.219-.418-.186-.524.094-.927.754-1.205 1.147-1.1 1.546-1.9 3.284-3.06 4.79-.5.65-1.129 1.44-1.932 1.657 1.016-1.649 4.32-3.58 3.954-5.816-.098-.59-.508-.88-.248-1.546.26-.665.834-.85 1.403-1.144 1.195-.617 2.165-1.558 3.039-2.564.998-1.148 1.876-2.403 2.945-3.485-.565-.223.122-1.282.466-.638-.432-.656 0-1.25.153-1.909.124-.531-.503-1.597.07-1.908a.326.326 0 01.047-.018z"
            fill="#C4C3C6"
          />
          <path
            d="M52.597 73.13c-1.017-1.43 1.512-9.602-2.006-5.887-1.73-.537-1.813 2.077-2.919 3.142.625-.818.337-1.364-.042-2.151-.84-.66-2.56 3.436-3.712 4.07-4.78 4.688-10.53 3.764-14.746.215l-.093-.156.05.121a16.446 16.446 0 01-2.741-2.999c.087-.061.166-.173.288-.151.523.094.927.754 1.206 1.146.432.608.818 1.245 1.197 1.887-.167-.4-.22-.838-.155-1.267.057-.25.14-.492.25-.724 1.863 1.54 3.833 2.676 5.417 2.182.41-.645.52-.509 1.081-.137 2.11.833 1.939-2.755.866-3.496-.108-.689-.713-1.41-.495-2.146.057-.34.273-.916-.232-.974-1.791-.77-3.248-1.831-4.93-2.82-2.079-1.972-3.982-4.127-6.257-5.93-1.01.41-1.88 2.235-2.045 3.674-.178-2.492-.525-2.726-1.24-2.344a.492.492 0 00-.308-.5c-.447-.153-1.317.342-1.723.433-.642.143-1.29.262-1.939.37-1.386.228-2.782.401-4.173.605-2.735.402-5.554.89-8.02 2.21-1.226.658-2.155 1.52-3.124 2.5-.97.98-1.93 1.575-2.389 2.95-.702 2.099-.286 4.376-.17 6.572.025.44.036.876.03 1.3 1.178 4.313 7.722 1.723 11.3 2.76.433-.031.87-.083 1.304-.151 1.304-.205 2.581-.546 3.773-1.16.486-.032.966-.05 1.447-.066 4.322-.136 8.651-.11 12.974.032h1.45l.062.058h.029c.214.009.426.044.631.105a7.338 7.338 0 01-.136-.165c7.1-.022 13.89-.04 19.235.011-.294-1.202 1.508-2.113 1.005-3.119zm-6.135-.954a13.82 13.82 0 01-1.828 2.11c.789-.818 1.46-1.74 2.181-2.62-.12.173-.23.344-.353.514v-.004zM53.352 76.184c.241-2.794 1.72-5.43 3.425-7.595.987-1.252 3.809-4.825 5.487-2.606.644.85.94 2.612 2.329 2.493.09-.988-.907-4.104.793-4.247 1.04-.089 1.57 1.34 1.917 2.087.682 1.47 1.385 2.937 1.965 4.453.681 1.772 1.08 3.638 1.666 5.44-1.888-.796-6.953 1.907-7.125-1.477-.022-.432.08-1.363-.569-1.363-.648 0-.756 1.09-.863 1.514-.4 1.58-1.923 1.655-3.337 1.592-1.692-.079-4.076-1.017-5.688-.291z"
            fill="#fff"
          />
          <path
            d="M55.753 55.934c.056 1.285.037 2.552-.396 3.738-.929 2.542-3.517 4.68-5.511 6.383-1.1.938-2.378 2.267-3.824 2.605-1.35.315-2.74-.2-4.07-.394-1.431-.21-2.797-.155-3.895-1.227-.4-.387-.664-.862-1.157-1.157-.587-.35-1.317-.392-1.938-.673a12.457 12.457 0 01-3.373-2.368c-.37-.37-.496-1.19-.788-1.45-.253-.221-.905-.179-1.247-.422-.146-.103-.225-.434-.421-.6-.244-.212-.671-.34-.955-.502-.443-.255-1.564-.767-1.71-1.315-.51-1.901 3.32.44 3.746.79.29.238.64.73.984.868.252.1.892.055 1.277.195 1.227.451 1.215.23 1.804-.811 1.227-2.181 1.458 1.674 2.646 2.088.299.104.768-.163 1.138-.049.545.168.916.682 1.24 1.114.642-.652-.481-3.135.475-3.272.88-.127 1.445 2.277 1.967 2.737.048-.107.089-.217.121-.33-.152.261-.361.34-.583.515-.137-.558.076-2.762 1.159-2.045.662.44-.013 1.948-.273 2.454-.082-.546-.157-1.415.37-1.773.618-.409 1.262.292 1.93-.028.537-.257.654-.955.976-1.404.394-.546 1.117-.938 1.256-1.643.139-.705-.393-1.127-.445-1.772-.057-.725.39-1.028.656-1.636.128-.296.035-1.126.564-1.006.438.101.329.954.295 1.265.846-.208 2.226.41 2.95-.136 1.28-.972-.409-2.492-1.32-2.871-.538-.222-2.949-.398-3.038-1.126-.154-1.249 3.114-.66 3.727-1.067-.409-.46-1.132-1.043-1.796-.89-.508.115-.72.845-1.284.805-.818-.056-1.363-1.782-1.07-2.432.365-.826 1.618-.675 2.213-1.599.201-.316 2.111-3.087 2.335-1.41 2.747-.903-1.337-4.605-2.089-5.519-.628-.764-1.14-2.513-2.207-2.744-1.667-.36-1.527 2.181-1.684 3.159-.559 3.444-4.098 4.583-7.123 4.985-1.718.227-3.828.486-5.29-.67-1.461-1.155-1.392-3.174-2.357-4.645-1.106-1.685-3.42-2.518-5.377-2.353-.897.075-2.085.777-2.948.296-.913-.509-.681-1.68-.358-2.483-.273.517-1.084.528-1.518.713-.335.137-.561.527-.988.438-.74-.154-.818-1.215-.818-1.812-.033-2.009 2.091-5.346 3.53-2.224.173.37.84 2.835 1.364 1.635.154.514.265 1.392.854 1.587 0 0 .409-.226.495-.226.547.007 1.093.045 1.636.114 2.142.255 4.068.546 6.18-.105 1.917-.588 3.64-1.709 5.64-2.025 1-.158 2.016-.162 3.021-.281.982-.114 1.984-.454 2.979-.34 1.974.224 3.188 1.392 4.991-.212 1.336-1.189 1.681-2.923.788-4.478-1.596-2.78-5.453-5.391-8.676-5.248-2.49.111-4.953.567-7.45.627-.702.016-1.833.1-2.353-.533-.471-.573-.248-1.067.535-1.227-1.313.93-.055-1.883.266-2.26-.76.646-4.05 2.843-4.59 1.055-.498-1.645 2.686-1.35 3.053-2.61-.56.28-2.517 1.758-2.958.624-.33-.847 1.374-1.381 1.93-1.425-.482.486-1.306.749-1.847.217a6.086 6.086 0 012.578-1.227c-.562.26-3.561 1.32-2.526-.173.645-.934 2.7-1.217 3.69-1.683-.342-.92-1.215-.04-1.791.013-.97.091-1.227-.874-.184-.796-.84.094-1.306-.556-.573-1.107.296-.222.734-.102 1.064-.248.395-.174.729-.559 1.048-.838-.123.109-.653-.176-.76-.244.506-1.197 2.542-1.153 3.614-1.339.203-2.789 6.28-.762 7.663-.362 1.277.369 2.533.808 3.798 1.215 2.49.803 4.059 1.984 6.092 3.553 1.772 1.373 4.045 2.602 5.044 4.72 1.107 2.348-.977 4.973-1.453 7.303-.468 2.297-1.04 5.644 1.86 6.392 2.235.578 4.114.923 3.526 3.779-.515 2.5-2.441 4.362-3.93 6.31-.734.965-1.561 2.08-1.87 3.271-.128.496-.3 1.306.183 1.69.328.258.698.025 1.054.16 1.733.65.804 3.59.545 4.896-.278 1.466-.104 3.013-.038 4.536z"
            fill="#000"
          />
          <path
            d="M18.674 35.43a.799.799 0 01.315-.642c.067.176.187.239.22.44.37-.16.207-1.395.699-1.298.282.054.151.662.482.718.362.061 1.002-1.885.898-.43-.048.655-.734 1.796.038 2.262.954.578 2.686-1.65 2.833.514.136 2.106-1.064 4.334-1.662 6.29.86-.023.594 1.156.529 1.678-.16 1.295.432 2.219.784 3.423.338 1.153.424 2.137 1.137 3.165.162.234.439.323.557.6.137.324-.07.598-.017.9.086.486.077.183.349.49.158.149.296.319.409.505.474.89.58 2.005 1.878 2.014.598 0 .971-.42 1.512-.545.61-.143 1.227.172 1.849.08.673-.1.556-.29.901-.69.41-.48.65-.137 1.075-.47.485-.379-.06-1.563.922-1.018.32.177.445.649.83.718.51.092.887-.505 1.098-.868.596-1.022.941-2.162 1.773-3.05.954-1.031 2.207-.606 3.272-1.319.545-.368.681-.848 1.375-1.002.535-.118.758-.086 1.17-.5.839-.845.545-1.376-.593-1.198-1.066.166-2.412-.563-3.35.07-.589.397-1.17 1.914-2.11 1.44-.72-.365-.281-1.697-.246-2.317.07-1.238.336-1.782 1.58-2.102.752-.192 1.841-.603 2.152.304.255.743.128 2.06 1.33 1.772 1.177-.273 1.73-1.681 3.144-1.41.671.129.955.623 1.405 1.068 1.477-.825 1.268-3.039.767-4.362a5.259 5.259 0 00-1.215-1.947c-.409-.394-.695-.567-1.233-.43-.358.092-.612.508-.773-.046-.093-.316.344-1.612.45-1.964.205-.682.53-.995 1.22-.6.853.488 1.21 1.555 1.656 2.37.488.892 1.189 1.474 1.917 2.163.76.72 1.308 1.513 1.283 2.598-.016.681-.337 1.721-1.164 1.732.022-.24.474-.845.308-1.063-.331-.436-1.396 1.118-1.616 1.352-.377.41-.47.604-.531 1.13-.037.317.196.495-.17.671-.328.156-1.59-.863-1.282.101-1.364-.525-.284.818-.216 1.26.05.328-.4 1.935.475 1.654.385-.124.174-.681.448-.941.424-.403 1.077-.137 1.453.144.502.375.47.375 1.053.463.301.047.716-.049.624.442-.17.907-2.951.574-3.578.623-.243.018-1.252.027-1.173.479.116.665 2.225-.137 2.573.035.6.308.334.857 1.12.936.746.075.971.032 1.274.863.177.491.3 1.122.18 1.636-.198.847-.614.41-1.109.787-.255-.334-.45-.596-.897-.518-.306.053-.066.388-.531.342-.26-.026 0-.469-.41-.37-.298.071-.306.688-.358.916-.379-.448.075-1.026-.13-1.499-.365-.848-.308.053-.409.303-.23.579-.974.29-1.017 1.014-.04.681.756 1.313.945 1.925.371 1.203-1.163 1.536-1.6 2.467-.3.64-.456 1.38-1.163 1.576.096-.026-.546-.055-.487-.048-.046 0-.166.115-.286.097-.18-.027-.233-.23-.363-.273-1.227-.347-1.005 1.802-1.17 2.607-.529-.606.885-2.82.156-3.033-.457-.137-.922 1.425-1.054 1.732.038.034.091.026.127.059a1.09 1.09 0 01-.348.325c-.409-.753.592-3.154-.818-3.366-1.193-.18.06 2.306-.136 2.879.053-.152-.554.224-.604.29-.18.234-.209.67-.257.946.052-.294-.083-.862-.319-1.077-.18-.165-.383-.078-.508-.165-.296-.206-.558-.585-.826-.855-.11.546-1.015 1.316-.782.236-.253.734-.744-.272-.409-.713-.946.802-.83-1.785-.848-2.171-.409.428-1.129.66-1.295 1.206-.128.425.179 1.153-.44 1.28-.273.057-1.302-.515-1.54-.721-.194-.168-.066-.481-.388-.536-.398-.068-.52.461-.507.743-1.192-.99-2.98-3.83-4.873-2.685.104.605.768 1.041 1.227 1.383.25.186 1 1.025 1.18 1.043.584.059.365-.739.849.07.234.391.515 1.27 1.082.545.396.236.29.766.461 1.148.21.469.637.762 1.046 1.05.77.545 1.52 1.132 2.318 1.635.415.281.865.508 1.339.674.324.102 1.032-.034 1.258.085.308.163.567.863.931 1.112.232.155.51.234.725.418.163.136.28.44.464.538.383.208 1.288.234 1.772.32.631.114 1.304.03 1.932-.041.104.354.682.099.954.014.753 1.135 2.099.638 3.078.332.34.97-1.128 2.293-1.724 2.905-1.09 1.118-2.259 2.117-3.65 2.84-3.21 1.672-7.267 1.948-10.534.273-3.085-1.593-4.605-4.757-6.344-7.591-.136-.214-.762-.97-.409-1.162.306-.166.938.757 1.079.927 1.131 1.363 2.476 2.508 3.817 3.659 1.197 1.025 2.853 2.891 4.624 2.39.424-.12.759-.473 1.2-.522.442-.05.854.295 1.313.219.866-.136.929-1.051.423-1.62.706-.395-.183-1.337-.41-1.772-.459-.849-.24-1.683-.508-2.549-.215-.696-.88-.917-1.5-1.158-1.011-.393-1.612-.94-2.496-1.512-.769-.496-1.636-.727-2.234-1.47a16.11 16.11 0 00-1.9-2.05c-.72-.645-1.26-1.424-1.931-2.111-.672-.687-1.134-1.117-1.78-.35-.325.386-.622.517-.992.828-.472.394-.136.136-.127.51.03 1.198-.425 2.4-.169 3.592-.529-1.341-1.01-2.906-.31-4.274.545-1.06 1.299-1.58.868-2.862-.51-1.528-1.178-2.877-1.314-4.512-.124-1.48-.071-2.99-.041-4.474.017-.923.173-2.365-.59-3.06-.568-.52-1.585-.242-1.991-.955-.608-1.075.454-2.504 1.515-2.62 1.181-.128 1.56-.32.789-1.39-.64-.889-1.235-2.061-2.536-1.158-1.3.904-.162 2.62-.9 3.757-.63-.884-.612-2.787-.07-3.718.333-.568.996-.41 1.326-.841.421-.56-.389-.927-.839-1.07l-.005-.015z"
            fill="#C4C3C6"
          />
          <path
            d="M30.897 10.185c-.341-.2-1.49.036-.569.136.221-.087.282.056.285.22-.089.422-.908-.3-.933.354-.034.365.305-.008.345.25-.325.092-3.892.61-1.735.696.57.238-.288.545.77.395-1.344.057-1.636.997-.596.702.262-.016.505-.197.767.136.156.202.113-.455.452-.313l-.713-.154c.28 0 .502-.545.855-.053.217.144.515-.682.836-.35.272.256-.126.196-.193.3-.186.46.775.126 1.037.384-.914.894-2.21.76-3.16 1.588h.009a3.21 3.21 0 00-2.105.954c1.513.146 3.231-1.596 4.134-.563.124.327-3.711.545-3.208 1.344.889.781 1.509-.867 2.425-.563-3.136 1.308-2.934 2.492.233.799.212-.146.546-.136.869-.022-.255.236-.97.3-.235.427-1.813 1.239-2.852 1.011-3.723 2.357.196.169.504-.126.774-.137-.045.44-.717.566-.512.98 1.172-.453 2.575-.625 3.68-1.469 1.663-1.145.472-.444 1.63-.46-1.107.324-1.657 1.227-2.435 1.91.682.011 1.234-.704.52.32.5-.194 1.858.328.834.378-.546-.136-.93 1.015-.826 1.263.328.102.489-.495.84-.546.108.93 1.115-.272.985.422-.847 1.336.768-.546 1.168.362.265.307.587-.092.895-.116.452-.02-.284-.377.264-.354.648.22 1.909-1.208 1.758.035.25.103.42-.433.651-.195.101.137-.064.186-.16.253-.307.233.028.623.238.256 1.12-.926 2.856-.954 4.164-.5.628.206 1.311-.46 2.19-.044 2 .994-.104.49 1.059 1.194 2.248.477 2.863 2.953 4.857 3.911 2.462 2.812-1.363 5.205-3.59 6.009-.72.954-.98-1.86-3.295-.898-.905-.184-1.51.817-2.3.644-1.508-.78-2.848.523-4.233-.03 1.05 2.082-5.302.818-2.973-.026.038-.01.077.017.114 0-.383-.05.29-.298-.068-.362a.187.187 0 01-.173-.215c1.356-.523 3.099-.328 4.517-1.091.902-.26 2.25 1 2.638-.217.252-.561.256-.57.842-.345.995-.538-.567-2.7-1.44-2.925-1.597-.444-3.212-1.27-5.044-.912-.575.196-1.191.097-1.528-.566-.691-.484-1.999-.484-2.484-1.3-.093-.573-.585-.052-.734.177-4.064.045-1.772 4.875-4.481 6.73 2.468-1.908 1.13 1.344.121 2.296-.245.485-1.078 1.988-1.266.668.04-.227-.15-.22-.292-.254-.228-.273-.029-.503.091-.737.38-.645-.53-1.42-.272-1.951-.449.722-.566 2.197.182 2.68.18.778-1.15 1.116-1.145.409.029-.886.682-2.6-.492-1.09-1.055.18-.77-2.074-.695-2.82.058-.63-.641-.905-.945-.256-1.422-2.103-3.212 3.083-2.96 4.477-2.318-5.79-1.9-15.018 2.181-19.787.734-.735.852-2.014 2.063-2.287.607-.145.251-1.077 1.06-.798 1.227.273 2.317-.924 3.254-.882.765-.424 1.562-.75 2.327-.818-7.14 2.543 5.54-4.64 5.797-2.475-.908.025-.545.487-.198 1.033-.968.089-1.93-.178-2.714.104-.32 1.022-1.535.496-1.955.983.34.47 1.566-.434 1.669.345zM55.693 45.996c-.331.546-.887.426-.67 1.323-.35-.332-.797-.539-1.072-.942-.682-.998.432-1.407.473-2.357.01-.2.22-1.926.938-1.192.315.323.346 1.171.382 1.6.032.397.165 1.21-.05 1.568z"
            fill="#C4C3C6"
          />
          <path
            d="M37.64 43.928c.228.255.3 1.19.287 1.5-.02.506-.924 2.23.215 2.102.642-.072 1.327-1.166 1.972-1.425 1.07-.43 2.045.02 3.136.007.369 0 1.437-.443 1.636 0 .199.443-.767 1.078-1.023 1.316-.143.136-.436.525-.585.582-.409.155-.532-.143-.981.202-.41.309-.607.681-1.117.846-.795.262-1.576.25-2.307.728-1.536 1.003-1.562 2.726-2.602 4.042-1.01 1.278-1.403-.273-2.472-.273.515 0-.937 1.415-1.136 1.524-.757.409-1.662.545-2.51.594a6.34 6.34 0 00-1.03.099c-.399.09-.64.388-.967.503-.818.283-1.531-.871-1.819-1.455-.097-.196-.568-1.62-.94-1.105.21-.783-.088-1.591-.456-2.277-.294-.545-1.055-1.116-1.227-1.667-.252-.792-.174-1.636-.442-2.428a7.269 7.269 0 01-.409-2.51c.01-.33.082-1.61-.576-1.228.195-.113.452-1.187.545-1.431.162-.42.292-.85.453-1.27.227-.596.469-1.126.452-1.773-.035-1.499-.052-2.786 1.815-2.745 1.652.037 3.663.638 4.44 2.216.865 1.758.767 3.556 2.631 4.688 1.001.61 2.055.713 3.2.637.4-.026 1.462-.28 1.794-.029a.21.21 0 01.024.03zM24.563 34.764c.038-1.411 2.59-2.77 1.512-4.065-.195 0-.081.17-.12.25-.069.459-1.322.89-.925.281s1.005-1.134 1.205-1.841c.341-1.21.433-2.534 1.031-3.659.818-1.542 2.342-2.098 3.717-1.003 1.167.93 3.08 1.62 4.563 1.672 1.116.04 2.25-.042 3.317.362 1.5.565 3.026 2.002 2.133 3.68-.619-.846-.84.295-1.363.536-1.032.473-2.634-.184-3.783 0-.239.037-2.758.818-2.727.861.031.044.273.232.33.183a1.98 1.98 0 01-.329.242.272.272 0 00.059.09c-.181-.183-.644.346-.698.485.292.195 1.442.187 1.317.786-.093.445-1.404.682-1.73.765-2.003.523-4.281.87-6.352.667-.108-.015-1.163-.114-1.157-.292z"
            fill="#fff"
          />
          <path
            d="M30.823 38.245c-.477-2.082.982-.909 1.5-2.06-.524-.069-.937.51-1.375.464-.136-.367.246-.935.67-.878l-.02.007c2.984-1.523 11.972-4.789 12.864.394-.296.252-.577-.627-.795-.02-2.605 2.464-5.682 4.708-8.566 6.691-1.701.119-1.348-1.314-.85-2.444.309-1.36-2.13-3.064-3.428-2.154z"
            fill="#C4C3C6"
          />
          <path
            d="M30.823 38.245c1.134-1.363 4.226.934 3.544 2.293-2.063 6.028 6.81-2.903 8.565-3.733 2.289-3.066.612 1.799.342 3.11.337-.373.402-3.28 1.18-3.742.065 2.374-1.547 6.84-3.874 5.608-.075-.369-.65-.782-.928-.616-2.71 4.114-9.303 2.427-8.83-2.92z"
            fill="#fff"
          />
          <path
            d="M44.69 38.758c.346-.333.973-1.431 1.398-.619.77.664 1.572.905 1.636 2.09 1.151.94.802 3.173-.128 4.06-.241.217.273.793-.165 1.016-1.126.123-.222-.894-.8-.994-2.03-1.318-3.272 1.838-4.492 1.27-1.938-.716-.537-4.668-.26-2.029.157-1.254 1.87-1.05 1.862-2.336.177-.841.67-1.635.949-2.458zM58.663 34.487c.08.712-.188 1.65-.303 2.15-.243 1.04-.647 2.643-1.651 3.23-.36.208-.985.307-1.312-.044-.28-.303-.32-1.272-.457-1.713-.304-.981-.818-1.93-.89-2.971-.116-1.688.98-1.535 2.274-1.549.552-.007 1.327-.193 1.846.056.312.15.451.463.493.841z"
            fill="#fff"
          />
          <path
            d="M37.697 43.18c.206-.583 1.7-2.225 2.258-2.206 2.475 1.482-.83 2.13-2.258 2.206zM44.404 39.423c-.589 3.871-1.61 2.045-2.621 4.597-.34-2.004 2.246-2.573 2.621-4.597z"
            fill="#C4C3C6"
          />
          <path
            d="M34.156 34.438c-.26.915-1.727 1.108-2.56 1.339.184-.794 1.78-1.019 2.56-1.339z"
            fill="#fff"
          />
          <path
            d="M50.077 35.21c.075.398-.681.222-.705-.078-.019-.158-.084-.136-.175-.16-1.267.187.557-2.431.88.239z"
            fill="#C4C3C6"
          />
          <path
            d="M31.616 35.771h-.17c.054-.07.112-.072.17 0zM37.731 55.864c.91-.784 1.114-2.66 2.63-2.97 1.324-.488 2.607-.068 3.86-.303.396-.148.819-.008.94.23.225.457-.418.628-.77.763-1.876-.123-2.454 3.217-4.438 2.423-1.341-.985-.24 2.004-2.222-.143zM42.016 56.468c1.136.445 1.104.36 2.102-.198.828.41.149 2.481-.571 1.702-.1-.251-.185-.546-.545-.49-.332.078-.43 1.803-.867.88-.08-.26.26-.75-.44-.689-.531-.241-.65-1.368.32-1.205z"
            fill="#fff"
          />
          <path
            d="M40.564 52.076c-.836-.046.04-.717.443-.624.838.139-.057.676-.443.624zM44.049 45.054c.409-.654 1.066-.65 1.9-.728a7.479 7.479 0 01-1.9.728zM44.042 45.046c0 .026-.01.048-.041.045.01-.02.056-.02.04-.045zM38.741 37.581c-.56-.04-1.161-.342-1.761-.272.014 0-.932-1.55-.938-1.723-.023-.665.751-.954 1.265-1.152.616-.245 3.08-1.106 3.272.084.097.588-.436 2.195-.818 2.642a1.134 1.134 0 01-1.02.422zM35.747 35.04c-.675.85-1.87 1.582-2.644 1.31.213-.974 1.743-.83 2.644-1.31zM43.567 38.61c.112-.633.202-2.498.664-2.453-.155.686-.079 2.245-.664 2.454zM32.32 36.184l.075-.056c-.02.02-.077.034-.075.056z"
            fill="#000"
          />
          <path
            d="M43.568 38.61c.475.162-.251 1.083-.333 1.451.026-.503.04-1.009.333-1.45zM43.227 40.053l-.04.07c.01-.024.053-.048.04-.07zM38.532 35.884c-.44 0-.955-.663-.641-1.022.127-.146 1.412-.038 1.239-.515.16.437.104 1.518-.586 1.537h-.012z"
            fill="#C4C3C6"
          />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip36">
          <path
            d="M0 38C0 17.013 17.013 0 38 0s38 17.013 38 38-17.013 38-38 38S0 58.987 0 38z"
            fill="#fff"
          />
        </clipPath>
        <clipPath id="prefix__clip37">
          <path
            fill="#fff"
            transform="translate(-3.04 5.13)"
            d="M0 0h82.27v74.67H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Piotr;
