import * as S from './ContentBody.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect, useRef } from 'react';
import MapContent from './MapContent';

export default function ContentBody({ menu, content }) {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const contentImages = content.imgUrl;
  const renderSlides = () =>
    contentImages.map((image) => (
      <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
      </div>
    ));

  // useEffect(() => {
  //   kakao.maps.load(() => {
  //     var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  //     var options = {
  //       //지도를 생성할 때 필요한 기본 옵션
  //       center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  //       level: 3, //지도의 레벨(확대, 축소 정도)
  //     };

  //     const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  //   });
  // }, []);

  return (
    <S.Wrapper>
      <S.ContentBodyContainer>
        <S.Image>
          <Carousel
            showArrows={true}
            autoPlay={false}
            infiniteLoop={true}
            showThumbs={false}
            showDots={false}
            selectedItem={contentImages[currentIndex]}
            onChange={handleChange}
          >
            {renderSlides()}
          </Carousel>
        </S.Image>

        {menu === 'location' ? <MapContent workFor={'detail'} /> : null}

        <S.Contents>{content.contents}</S.Contents>
      </S.ContentBodyContainer>
    </S.Wrapper>
  );
}
