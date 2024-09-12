import { list } from '@vercel/blob';
const Galeri = async() => {
  
  const {blobs} = await list();
  console.log(blobs)
  return (
    <div className="w-full md:w-2/4 mx-auto min-h-full py-20 bg-zinc-900">
      {blobs.map((blob, index) => (
        <div key={blob.url} className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}` }>
          <video width="320" height="240" controls>
            <source src={blob.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Galeri;