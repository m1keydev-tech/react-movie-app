import ImageComponent from "@/components/Image";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import { GENDER_MAPPING } from "@/libs/constants";
import { useLoaderData } from "react-router-dom";

const PeoplePage = () => {
  const peopleInfo = useLoaderData();

  return (
    <>
      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex gap-6">
            <div className="flex-1">
              <ImageComponent
                src={
                  peopleInfo.profile_path &&
                  `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`
                }
                width={600}
                height={700}
                className="mb-6"
              />
              <div>
                <p className="mb-6 text-[1.3vw] font-bold">Personal Info</p>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">Known For</p>
                    <p>{peopleInfo.known_for_department}</p>
                  </div>
                  <div>
                    <p className="font-bold">Gender</p>
                    <p>{GENDER_MAPPING[peopleInfo.gender]}</p>
                  </div>
                  <div>
                    <p className="font-bold">Place of Birth</p>
                    <p>{peopleInfo.place_of_birth}</p>
                  </div>
                  <div>
                    <p className="font-bold">Birthday</p>
                    <p>{peopleInfo.birthday}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[2]">
              <p className="mb-6 text-[1.5vw] font-bold">{peopleInfo.name}</p>
              <div className="mb-6">
                <p className="mb-4 text-[1.4vw] font-bold">Biography</p>
                <p className="whitespace-pre-line">{peopleInfo.biography}</p>
              </div>
              <RelatedMediaList
                title={"Known for"}
                mediaList={peopleInfo.combined_credits?.cast || []}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PeoplePage;
