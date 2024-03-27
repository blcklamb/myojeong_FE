import { useState } from "react";
import Intro from "components/story/Intro";
import MakeWish from "components/story/MakeWish";
import NameFrom from "components/story/NameFrom";
import NameTo from "components/story/NameTo";
import Turn from "components/story/Turn";
import TypeTo from "components/story/TypeTo";
import { styled } from "styled-components";
import { usePOSTWish } from "hooks/api/story";
import { animated } from "react-spring";
import useReactSpring from "hooks/useReactSpring";

export type TStep =
  | "INTRO"
  | "TURN"
  | "NAME-FROM"
  | "TYPE-TO"
  | "NAME-TO"
  | "MAKE-WISH";

export interface StoryStepData {
  fromName: string;
  toType: string;
  toName: string;
  content: string;
  isOpen: boolean;
}

const Story = () => {
  const [step, setStep] = useState<TStep>("INTRO");
  const [storyData, setStoryData] = useState<StoryStepData>({
    fromName: "",
    toType: "",
    toName: "",
    content: "",
    isOpen: true,
  });

  const { mutate } = usePOSTWish();

  const { useFunnelTransition } = useReactSpring;
  const pageTransition = useFunnelTransition(step);

  const onNextNameFrom = (작성자_이름: string) => {
    setStoryData((prev) => {
      return { ...prev, fromName: 작성자_이름 };
    });
    setStep("TYPE-TO");
  };
  const onNextTypeTo = (송편주인_타입: string) => {
    if (송편주인_타입 === "나") {
      setStoryData((prev) => {
        return { ...prev, toName: "", toType: 송편주인_타입 };
      });
      setStep("MAKE-WISH");
    } else {
      setStoryData((prev) => {
        return { ...prev, toType: 송편주인_타입 };
      });
      setStep("NAME-TO");
    }
  };
  const onNextNameTo = (송편주인_이름: string) => {
    setStoryData((prev) => {
      return { ...prev, toName: 송편주인_이름 };
    });
    setStep("MAKE-WISH");
  };

  const onNextMakeWish = (content: string, isOpen: boolean) => {
    const { fromName, toName } = storyData;
    mutate({
      from_name: fromName,
      to_name: toName,
      content: content,
      is_open: isOpen,
    });
  };

  return (
    <S_Layout>
      {pageTransition((props, item) => (
        <animated.div style={props}>
          {item === "INTRO" && (
            <Intro
              onNext={() => setStep("TURN")}
              onSkip={() => setStep("NAME-FROM")}
            />
          )}
          {item === "TURN" && (
            <Turn
              onNext={() => setStep("NAME-FROM")}
              onSkip={() => setStep("NAME-FROM")}
            />
          )}
          {item === "NAME-FROM" && (
            <S_Padding5>
              <NameFrom onNext={onNextNameFrom} />
            </S_Padding5>
          )}
          {item === "TYPE-TO" && (
            <S_Padding5>
              <TypeTo onNext={onNextTypeTo} />
            </S_Padding5>
          )}
          {item === "NAME-TO" && (
            <S_Padding5>
              <NameTo onNext={onNextNameTo} toType={storyData.toType} />
            </S_Padding5>
          )}
          {item === "MAKE-WISH" && (
            <S_Padding5>
              <MakeWish
                onNext={onNextMakeWish}
                fromName={storyData.fromName}
                toName={storyData.toName}
              />
            </S_Padding5>
          )}
        </animated.div>
      ))}
    </S_Layout>
  );
};

export default Story;

const S_Layout = styled.div`
  width: 100%;
  height: 84.4rem;
  padding-top: 5rem;
`;
const S_Padding5 = styled.div`
  padding-top: 5rem;
  /* height: 100% */
`;
