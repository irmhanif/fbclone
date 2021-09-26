import { useSession } from "next-auth/client";
import { stories } from "../constants";
import StoryCard from "./StoryCard";

function Stories() {
  const [session] = useSession();
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      <StoryCard
        name={session.user.name}
        src={'https://scontent.fcjb3-3.fna.fbcdn.net/v/t1.6435-9/218384002_2353622654771255_8214845013987110837_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=U_GXlQUXsaQAX96g6tb&_nc_ht=scontent.fcjb3-3.fna&oh=2c872f1b9bacdbcdad830b063284fd55&oe=6176EEE5'}
        profile={session.user.image}
        createStory
      />
      {stories.map((story, index) => {
        return (
          <StoryCard
            key={index}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        );
      })}
    </div>
  );
}

export default Stories;
