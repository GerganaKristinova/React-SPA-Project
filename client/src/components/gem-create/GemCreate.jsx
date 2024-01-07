import { useNavigate } from 'react-router-dom'

import * as gemsService from '../../services/gemsService'


export default function GemCreate() {
    const navigate = useNavigate();

    const createGemSubmitHandler = async (e) => {
        e.preventDefault()
        const gemData = Object.fromEntries(new FormData(e.currentTarget));

        await gemsService.createGems(gemData)

        switch (gemData.category) {
            case "raw-gems":
                navigate('/gems/raw-gems')
                break;
            case "tumbled-gems":
                navigate('/gems/tumbled-gems')
                break;
            case "shaped-gems":
                navigate('/gems/shaped-gems')
                break;
            default:
                navigate('/404')
                break;
        }
    }

    return (
        <div className="container py-5">
            <div className="row py-5">
                <form className="col-md-9 m-auto" onSubmit={createGemSubmitHandler}>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label htmlFor="crystal">Crystal</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="crystal" name="crystal"
                                placeholder="Crystal"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <label htmlFor="energy">Energy</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="energy" name="energy"
                                placeholder="Energy"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category">Category</label>
                        <select defaultValue={''} className="form-control mt-1" id="category" name="category" placeholder="Category" required>
                            <option value="" disabled>Choose a category</option>
                            <option value="raw-gems">Raw Gems</option>
                            <option value="tumbled-gems">Tumbled Gems</option>
                            <option value="shaped-gems">Shaped Gems</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="zodiac">Zodiac Sign</label>
                        <select defaultValue={''}  className="form-control mt-1" id="zodiac" name="zodiac" placeholder="Zodiac">
                            <option value="" disabled>Choose a zodiac sign</option> 
                            <option value="Aries">Aries</option>
                            <option value="Taurus">Taurus</option>
                            <option value="Gemini">Gemini</option>
                            <option value="Cancer">Cancer</option>
                            <option value="Leo">Leo</option>
                            <option value="Virgo">Virgo</option>
                            <option value="Libra">Libra</option>
                            <option value="Scorpio">Scorpio</option>
                            <option value="Sagittarius">Sagittarius</option>
                            <option value="Capricorn">Capricorn</option>
                            <option value="Aquarius">Aquarius</option>
                            <option value="Pisces">Pisces</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="specifics">Specifics</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            id="specifics"
                            name="specifics"
                            placeholder="Specifics"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cleansing">Cleansing</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            id="cleansing"
                            name="cleansing"
                            placeholder="Cleansing"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageUrl">Image</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload an image"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="summary">Summary</label>
                        <textarea
                            className="form-control mt-1"
                            id="summary" name="summary"
                            placeholder="Summary"
                            rows="8"
                            required
                        ></textarea>
                    </div>
                    <div className="row">
                        <div className="col text-end mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">Post Gem</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}