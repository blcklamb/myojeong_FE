import { useState } from "react";
import Intro from "components/story/Intro";
import MakeWish from "components/story/MakeWish";
import NameFrom from "components/story/NameFrom";
import NameTo from "components/story/NameTo";
import Turn from "components/story/Turn";
import TypeTo from "components/story/TypeTo";
import { styled } from "styled-components";
import { usePOSTWish } from "hooks/api/story";
import { useTransition, animated } from "react-spring";

type TStep =
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

  const transitions = useTransition(step, {
    from: { opacity: 0, transform: "translate3d(1000vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" },
    exitBeforeEnter: true,
  });

  const onNextNameFrom = (name: string) => {
    setStoryData((prev) => {
      return { ...prev, fromName: name };
    });
    setStep("TYPE-TO");
  };
  const onNextTypeTo = (type: string) => {
    if (type === "나") {
      setStoryData((prev) => {
        return { ...prev, toName: "", toType: type };
      });
      setStep("MAKE-WISH");
    } else {
      setStoryData((prev) => {
        return { ...prev, toType: type };
      });
      setStep("NAME-TO");
    }
  };
  const onNextNameTo = (name: string) => {
    setStoryData((prev) => {
      return { ...prev, toName: name };
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
    <StyledLayout>
      {transitions((props, item) => (
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
          {item === "NAME-FROM" && <NameFrom onNext={onNextNameFrom} />}
          {item === "TYPE-TO" && <TypeTo onNext={onNextTypeTo} />}
          {item === "NAME-TO" && (
            <NameTo onNext={onNextNameTo} toType={storyData.toType} />
          )}
          {item === "MAKE-WISH" && (
            <MakeWish
              onNext={onNextMakeWish}
              fromName={storyData.fromName}
              toName={storyData.toName}
            />
          )}
        </animated.div>
      ))}
    </StyledLayout>
  );
};

export default Story;

const StyledLayout = styled.div`
  width: 100%;
  height: 84.4rem;
`;
