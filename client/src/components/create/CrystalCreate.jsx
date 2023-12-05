import { useNavigate } from 'react-router-dom'

import * as rawGemsService from '../../services/rawGemsService'
import * as tumbledGemsService from '../../services/tumbledGemsService'
import * as shapedGemsService from '../../services/shapedGemsService'

export default function CrystalCreate() {
    const navigate = useNavigate();
    
    const createCrystalSubmitHandler = async (e) => {
        e.preventDefault()
        const crystalData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            console.log(crystalData);
            switch (crystalData.category) {
                case "raw-gem":
                    await rawGemsService.createRawGems(crystalData)
                    navigate('/raw-gems')
                    break;
                case "tumbled-gem":
                    await tumbledGemsService.createTumbledGems(crystalData)
                    navigate('/tumbled-gems')
                    break;
                case "shaped-gem":
                    await shapedGemsService.createShapedGems(crystalData)
                    navigate('/shaped-gems')
                    break;
                default:
                    navigate('/404')
                break;
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container py-5">
            <div className="row py-5">
                <form className="col-md-9 m-auto" onSubmit={createCrystalSubmitHandler}>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label htmlFor="crystal">Crystal</label>
                            <input type="text" className="form-control mt-1" id="crystal" name="crystal" placeholder="Crystal" />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <label htmlFor="energy">Energy</label>
                            <input type="text" className="form-control mt-1" id="energy" name="energy" placeholder="Energy" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category">Category</label>
                        <select className="form-control mt-1" id="category" name="category" placeholder="Category">
                            <option value="choosecategory">Choose a category</option>
                            <option value="raw-gem">Raw Gems</option>
                            <option value="tumbled-gem">Tumbled Gems</option>
                            <option value="shaped-gem">Shaped Gems</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="zodiac">Zodiac Sign</label>
                        <select className="form-control mt-1" id="zodiac" name="zodiac" placeholder="Zodiac">
                            <option value="choosezodiac">Choose a zodiac sign</option>
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
                        <input type="text" className="form-control mt-1" id="specifics" name="specifics" placeholder="Specifics" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cleansing">Cleansing</label>
                        <input type="text" className="form-control mt-1" id="cleansing" name="cleansing" placeholder="Cleansing" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageUrl">Image</label>
                        <input type="text" className="form-control mt-1" id="imageUrl" name="imageUrl" placeholder="Upload an image" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="summary">Summary</label>
                        <textarea className="form-control mt-1" id="summary" name="summary" placeholder="Summary" rows="8"></textarea>
                    </div>
                    <div className="row">
                        <div className="col text-end mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">Post Crystal</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}