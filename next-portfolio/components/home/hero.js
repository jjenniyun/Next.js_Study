import Animation from './animation'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 황윤정입니다!
                    <br className="hidden lg:inline-block" />오늘도 빡코딩!!
                </h1>
                <p className="mb-8 leading-relaxed">
                    풀이 간에 위하여, 밥을 커다란 커다란 이것이다. 꾸며 역사를 그들의 예가 아니더면, 이것을 같이 같이, 풀밭에 있다. 그들의 인간의 없는 무      엇을 석가는 방지하는 같이, 듣는다. 동력은 피부가 가슴이 같은 기쁘며, 이 것이다. 예가 얼음과 속에 오직 이상의 것이다. 되려니와, 인생의 소담스러운 인류의 주며, 위하여 꾸며 그들에게 얼마나 약동하다. 싹이 싶이 인생을 꽃 설레는 착목한는 운다. 보이는 꾸며 있는 너의 위하여 구하지 것이 철환하였는가? 실현에 스며들어 생의 주며, 것이다. 무엇이 끝에 가진 못할 사라지지 아니다. 우리 그들은 트고, 이성은 무엇이 것이다.
                </p>
                <div className="flex justify-center">
                    <Link href='/projects' legacyBehavior>
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div >
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    )
}