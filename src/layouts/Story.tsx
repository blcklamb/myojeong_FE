import { useState } from "react";
import Intro from "components/story/Intro";
import MakeWish from "components/story/MakeWish";
import NameFrom from "components/story/NameFrom";
import NameTo from "components/story/NameTo";
import Turn from "components/story/Turn";
import TypeTo from "components/story/TypeTo";
import { styled } from "styled-components";
import { usePOSTWish } from "hooks/api/story";

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

  const onNextNameFrom = (name: string) => {
    setStoryData((prev) => {
      return { ...prev, fromName: name };
    });
    setStep("TYPE-TO");
  };
  const onNextTypeTo = (type: string) => {
    setStoryData((prev) => {
      return { ...prev, toType: type };
    });
    setStep("NAME-TO");
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
      {step === "INTRO" && (
        <Intro
          onNext={() => setStep("TURN")}
          onSkip={() => setStep("NAME-FROM")}
        />
      )}
      {step === "TURN" && (
        <Turn
          onNext={() => setStep("NAME-FROM")}
          onSkip={() => setStep("NAME-FROM")}
        />
      )}
      {step === "NAME-FROM" && <NameFrom onNext={onNextNameFrom} />}
      {step === "TYPE-TO" && <TypeTo onNext={onNextTypeTo} />}
      {step === "NAME-TO" && (
        <NameTo onNext={onNextNameTo} toType={storyData.toType} />
      )}
      {step === "MAKE-WISH" && (
        <MakeWish
          onNext={onNextMakeWish}
          fromName={storyData.fromName}
          toName={storyData.toName}
        />
      )}
    </StyledLayout>
  );
};

export default Story;

const StyledLayout = styled.div`
  width: 100%;
  height: 84.4rem;
`;
